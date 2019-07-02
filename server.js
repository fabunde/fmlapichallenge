const express = require("express");

const users = require("./api/users");

const app = express();

app.use("/api/users", users);

const port = 8000;

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
