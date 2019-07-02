const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../model/User");
const isEmpty = require("../util/isEmpty");

const errors = {};
// @route   GET api/users
// @desc    get lists of users
// @access  Private
router.get("/", (req, res) => {
  res.json({ users: [] });
});

router.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    //check if user exist
    if (user) {
      errors.username = "username already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password
      });

      //encrypt password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.json(user);
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (isEmpty(username) || isEmpty(password)) {
    error.loginError = "Username or password is required.";
    return res.status(400).json(errors);
  } else {
    // Find user by username
    User.findOne({ username })
      .then(user => {
        // Check for user
        if (!user) {
          errors.username = "User not found";
          return res.status(404).json(errors);
        }

        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            // User Matched
            const payload = {
              username: user.fname
            }; // Create JWT Payload

            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 604800 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            errors.password = "Password incorrect";
            return res.status(400).json(errors);
          }
        });
      })
      .catch(err => console.log(err));
  }
});

module.exports = router;
