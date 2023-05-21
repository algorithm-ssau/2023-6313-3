// Frameworks and libraries import
const express = require("express");
const { setupMiddlewares } = require("./extensions/applicationSetup");

// Create app
const app = express();
const port = 1000;

setupMiddlewares(app);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
