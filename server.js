const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const user = require("./api/users");

const app = express();

// routes
app.use("/api/users", user);

let db = {};
if (process.env.NODE_ENV === "production") {
  // DB Config
  db = require("./config/production").mongoURI;
} else {
  // DB Config
  db = require("./config/dev").mongoURI;
}

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Serve static assests in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
});
