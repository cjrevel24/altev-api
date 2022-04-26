"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var router = require("express").Router();

var _require = require("express-validator"),
    check = _require.check,
    validationResult = _require.validationResult;

var JWT = require("jsonwebtoken");

var bcrypt = require("bcrypt");

var _require2 = require("../db"),
    users = _require2.users;

var checkAuth = require("../middleware/checkAuth");

var ls = require("local-storage"); // SIGNUP


router.post("/signup", [check("email", "Please input a valid email").isEmail(), check("password", "Please input a password with a min length of 6").isLength({
  min: 6
})], /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, firstName, lastName, errors, user, access_token, refresh_token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password, firstName = _req$body.firstName, lastName = _req$body.lastName; // Validate the inputs

            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(422).json({
              errors: errors.array()
            }));

          case 4:
            // Validate if the user doesnt already exist;
            user = users.find(function (user) {
              return user.email === email;
            });

            if (!user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(422).json({
              errors: [{
                msg: "This user already exists"
              }]
            }));

          case 7:
            // Hash the password
            // const hashedPassword = await bcrypt.hash(password, 10);
            // Save the password into the db
            users.push({
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName
            });
            _context.next = 10;
            return JWT.sign({
              email: email
            }, "nfb32iur32ibfqfvi3vf932bg932g932", {
              expiresIn: 360000
            });

          case 10:
            access_token = _context.sent;
            _context.next = 13;
            return JWT.sign({
              email: email
            }, "nfb32iur32ibfqfvi3vf932bg932g932", {
              expiresIn: 360000
            });

          case 13:
            refresh_token = _context.sent;
            return _context.abrupt("return", res.json({
              access_token: access_token,
              refresh_token: refresh_token
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); // LOGIN

router.post("/login", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, user, access_token, refresh_token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password; // Check if user with email exists

            user = users.find(function (user) {
              return user.email === email;
            });

            if (user) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(422).json({
              errors: [{
                msg: "Invalid Credentials"
              }]
            }));

          case 4:
            _context2.next = 6;
            return JWT.sign({
              email: email
            }, "nfb32iur32ibfqfvi3vf932bg932g932", {
              expiresIn: 360000
            });

          case 6:
            access_token = _context2.sent;
            _context2.next = 9;
            return JWT.sign({
              email: email
            }, "nfb32iur32ibfqfvi3vf932bg932g932", {
              expiresIn: 360000
            });

          case 9:
            refresh_token = _context2.sent;
            return _context2.abrupt("return", res.json({
              access_token: access_token,
              refresh_token: refresh_token
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // ALL USER

router.get("/all", checkAuth, function (req, res) {
  return res.json(users);
}); //GET SPECIFIC USER

router.get("/me", checkAuth, function (req, res) {
  var token = req.header("x-auth-token");

  if (token == null) {
    return res.status(404).json({
      errors: [{
        msg: "Token invalid"
      }]
    });
  }

  var getUser = users.filter(function (user) {
    return user.email === req.user;
  }).map(function (specificUser) {
    return {
      email: specificUser.email,
      firstName: specificUser.firstName,
      lastName: specificUser.lastName
    };
  });
  return res.json(getUser);
}); //LOGOUT USER

router["delete"]("/logout", checkAuth, /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var refresh_token, removeToken;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            refresh_token = req.body.refresh_token;

            try {
              removeToken = refresh_token;
              ls.remove(removeToken);
              res.send("Logout successfully!!");
            } catch (error) {
              console.log(error);
              res.status(500).send(error);
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
module.exports = router;
//# sourceMappingURL=auth.js.map