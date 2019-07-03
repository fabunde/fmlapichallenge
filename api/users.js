const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/User");
const isEmpty = require("../util/isEmpty");
const dev = require("../config/dev");

const bodyParser = require("body-parser");
// create application/json parser
const jsonParser = bodyParser.json();

const error = {};

// @route   GET api/users
// @desc    get lists of users
// @access  Public
router.get("/", (req, res) => {
  res.json({ users: [] });
});

// @route   POST api/users/register
// @desc    register a user
// @access  Public
router.post("/register", jsonParser, (req, res) => {
  if (isEmpty(req.body)) {
    error.msg = "username and password is required";
    error.type = "user";
    return res.status(400).json({ error });
  }

  const { username, password } = req.body;

  User.findOne({ username }).then(user => {
    //check if user exist
    if (user) {
      error.type = "user";
      error.msg = "username already exists";
      return res.status(400).json({ error });
    } else {
      // create new user
      const newUser = new User({
        username,
        password
      });

      //encrypt password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            error.msg = "Password hashing failed";
            error.type = "password";
            return res.status(400).json({ error });
          }
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.json(user.username);
            })
            .catch(err => {
              error.msg = "Error saving user";
              error.type = "user";
              console.log(err);
              return res.status(400).json({ error });
            });
        });
      });
    }
  });
});

router.post("/login", jsonParser, (req, res) => {
  const { username, password } = req.body;

  if (isEmpty(username) || isEmpty(password)) {
    error.type = "login";
    error.msg = "Username or password is required.";
    return res.status(400).json(error);
  } else {
    // Find user by username
    User.findOne({ username })
      .then(user => {
        // Check for user
        if (!user) {
          error.type = "login";
          error.msg = "User not found";
          return res.status(404).json({ error });
        }

        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            // User Matched
            const payload = {
              username
            }; // Create JWT Payload

            // Sign Token
            jwt.sign(
              payload,
              dev.secretOrKey,
              { expiresIn: 604800 },
              (err, token) => {
                if (err) {
                  error.type = "login";
                  error.msg = "Error in logging user";
                  return res.status(400).json({ error });
                }
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            error.msg = "Password incorrect";
            error.type = "login";
            return res.status(400).json({ error });
          }
        });
      })
      .catch(err => console.log(err));
  }
});

module.exports = router;
