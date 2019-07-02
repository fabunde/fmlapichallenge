const express = require("express");
const router = express.Router();

// @route   GET api/users
// @desc    get lists of users
// @access  Private
router.get("/", (req, res) => {
  res.json({ users: [] });
});

router.post("/register", (req, res) => {
  // get user
  //compare password
  //return user on success
  //else return error
});

router.post("/login", (req, res) => {
  // get user
  //compare password
  //return user on success
  //else return error
});

module.exports = router;
