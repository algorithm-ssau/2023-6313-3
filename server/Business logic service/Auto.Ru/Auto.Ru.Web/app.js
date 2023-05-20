const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const axios = require("axios").default;

const env = process.env.NODE_ENV || 'localDevelopment';
const config = require('./config/config.json')[env];

const app = express();
const port = 1000;

module.exports.env = app.get("env");

const cars = require("./routers/carsRouter");

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use(async function(req, res, next){
  // let cookie = req.headers.cookie;

  // if (!cookie){
  //   res.status(403).send();
  // }
  const { headers: { cookie } } = req;
  if (cookie) {
      const values = cookie.split(';').reduce((res, item) => {
          const data = item.trim().split('=');
          return { ...res, [data[0]]: data[1] };
      }, {});
      res.locals.cookie = values;
  }
  else {
    res.status(403).send();
  }

//let accessToken = cookie.
  //var json = req.signedCookie
  // res.clearCookie('accessToken');
  // res.clearCookie('refreshToken');
  // res.cookie('accessToken', 'TestAccessToken222');
  // res.cookie('refreshToken', 'TestRefreshToken2222222');
  // res.send();

  let accessToken = res.locals.cookie.accessToken;
  let refreshToken = res.locals.cookie.refreshToken;

  let {data} = await axios.post(
    `http://${config.authServiceHost}:8000/api/users/validate`,
    {
      access_token: accessToken,
    });

  if (!data.success){
    let refreshResponse;
    axios.post(
    `http://${config.authServiceHost}:8000/api/users/refresh`,
    {
      refresh_token: refreshToken,
    })
    .then( authRes => {refreshResponse = authRes}).catch((authErr) => console.log(authErr));

    console.log(refreshResponse);
  }
    next();
})

app.use("/api/cars", cars);

app.use(function(err, req, res, next){
  console.log(err);
  res.status(500);
  res.send({ message: err.message});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
