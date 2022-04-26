"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var jwt = require("jsonwebtoken");

module.exports = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.header("x-auth-token"); // CHECK IF WE EVEN HAVE A TOKEN

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              errors: [{
                msg: "No token found"
              }]
            }));

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return jwt.verify(token, "nfb32iur32ibfqfvi3vf932bg932g932");

          case 6:
            user = _context.sent;
            req.token = token;
            req.user = user.email;
            next();
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.status(400).json({
              errors: [{
                msg: "Invalid Token"
              }]
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 12]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=checkAuth.js.map