const axios = require("axios").default;

const env = process.env.NODE_ENV || 'localDevelopment';
const config = require('../config/config.json')[env];

async function authMiddleware(req, res, next) {
    const { headers: { cookie } } = req;
    if (cookie) {
        if (req.cookies.accessToken) {
            res.locals.cookie = {};
            res.locals.cookie.accessToken = req.cookies.accessToken;
        }
        else {
            res.status(403).send();
            return;
        }

        res.locals.cookie.refreshToken = req.cookies.refreshToken;
    }
    else {
        res.status(403).send();
        return;
    }

    let accessToken = res.locals.cookie.accessToken;
    let refreshToken = res.locals.cookie.refreshToken;

    let authRequestPath = `http://${config.authServiceHost}:8000/api/users/validate`;
    let authRequestBody = { access_token: accessToken };
    let requestOptions = { validateStatus: validateStatus };

    let { data } = await axios.post(
        authRequestPath,
        authRequestBody,
        requestOptions);

    // Auth succesed
    if (data.success) {
        next();
        return;
    }

    // Try to refresh 
    let refreshRequestPath = `http://${config.authServiceHost}:8000/api/users/refresh`;
    let refreshRequestBody = { refresh_token: refreshToken };

    let refreshResponse = await axios.post(
        refreshRequestPath,
        refreshRequestBody,
        requestOptions);

    // Refresh failed
    if (refreshResponse.status != 200) {
        res.status(403).send();
        return;
    };

    // Update cookie after refresh
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.cookie('accessToken', refreshResponse.data.access_token);
    res.cookie('refreshToken', refreshResponse.data.refresh_token);
    next();
}

function validateStatus(status) {
    return status < 500;
}

module.exports = { authMiddleware };