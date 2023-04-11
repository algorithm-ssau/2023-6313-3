import Express from "express";

import { db, User } from "./persistence/index.js";

const app = Express();
const port = 3000;

app.get("/create-user", async (req, res) => {
  console.log(req.query);
  const { username, email, login, password } = req.body;
  if (username && email && login && password) {
    await User.create({
      username: username,
      email: email,
      login: login,
      password: password,
    });
  }
  res.status(200).send("User was created");
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

// синхронизация с бд, после успшной синхронизации запускаем сервер
db.sync()
  .then(() => {
    app.listen(port, function () {
      console.log("Server is running...");
    });
  })
  .catch((err) => console.log(err));
