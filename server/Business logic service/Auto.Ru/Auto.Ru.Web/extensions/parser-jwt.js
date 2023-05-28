const jwt = require("jsonwebtoken");

function parseJwt(access_token) {
    return jwt.decode(access_token);
}

module.exports = { parseJwt };