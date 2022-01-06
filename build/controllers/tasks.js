"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.saveTask = exports.getTasksCount = exports.getTasks = exports.getTask = exports.deleteTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _connection, _yield$_connection$qu, _yield$_connection$qu2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.connect)();

          case 3:
            _connection = _context.sent;
            _context.next = 6;
            return _connection.query('SELECT * FROM Tasks');

          case 6:
            _yield$_connection$qu = _context.sent;
            _yield$_connection$qu2 = (0, _slicedToArray2["default"])(_yield$_connection$qu, 1);
            rows = _yield$_connection$qu2[0];

            _connection.end();

            res.status(200).json(rows);
            _context.next = 18;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            connection.end();
            console.log(_context.t0);
            res.status(500).json({
              err: _context.t0
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function getTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var getTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _connection2, _yield$_connection2$q, _yield$_connection2$q2, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            _connection2 = _context2.sent;
            _context2.next = 6;
            return _connection2.query('SELECT * FROM Tasks WHERE id = ?', [req.params.id]);

          case 6:
            _yield$_connection2$q = _context2.sent;
            _yield$_connection2$q2 = (0, _slicedToArray2["default"])(_yield$_connection2$q, 1);
            rows = _yield$_connection2$q2[0];

            _connection2.end();

            rows.length ? res.status(200).json(rows[0]) : res.sendStatus(404);
            _context2.next = 18;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            connection.end();
            console.log(_context2.t0);
            res.status(500).json({
              err: _context2.t0
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function getTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTask = getTask;

var getTasksCount = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _connection3, _yield$_connection3$q, _yield$_connection3$q2, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.connect)();

          case 3:
            _connection3 = _context3.sent;
            _context3.next = 6;
            return _connection3.query('SELECT COUNT(*) cantidad FROM Tasks');

          case 6:
            _yield$_connection3$q = _context3.sent;
            _yield$_connection3$q2 = (0, _slicedToArray2["default"])(_yield$_connection3$q, 1);
            rows = _yield$_connection3$q2[0];

            _connection3.end();

            res.status(200).json(rows[0]['cantidad']);
            _context3.next = 18;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            connection.end();
            console.log(_context3.t0);
            res.status(500).json({
              err: _context3.t0
            });

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function getTasksCount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getTasksCount = getTasksCount;

var saveTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _connection4, _yield$_connection4$q, _yield$_connection4$q2, results;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.connect)();

          case 3:
            _connection4 = _context4.sent;
            _context4.next = 6;
            return _connection4.query('INSERT INTO Tasks (title,description) VALUES (?, ?)', [req.body.title, req.body.description]);

          case 6:
            _yield$_connection4$q = _context4.sent;
            _yield$_connection4$q2 = (0, _slicedToArray2["default"])(_yield$_connection4$q, 1);
            results = _yield$_connection4$q2[0];

            _connection4.end();

            res.status(201).json(_objectSpread({
              id: results.insertId
            }, req.body));
            _context4.next = 18;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            connection.end();
            console.log(_context4.t0);
            res.status(500).json({
              err: _context4.t0
            });

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));

  return function saveTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.saveTask = saveTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _connection5;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _database.connect)();

          case 3:
            _connection5 = _context5.sent;
            _context5.next = 6;
            return _connection5.query('DELETE FROM Tasks WHERE id = ?', [req.params.id]);

          case 6:
            _connection5.end();

            res.sendStatus(204);
            _context5.next = 15;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            connection.end();
            console.log(_context5.t0);
            res.status(500).json({
              err: _context5.t0
            });

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var updateTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _connection6, result;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _database.connect)();

          case 3:
            _connection6 = _context6.sent;
            _context6.next = 6;
            return _connection6.query('UPDATE Tasks SET ? WHERE id = ?', [req.body, req.params.id]);

          case 6:
            result = _context6.sent;

            _connection6.end();

            res.sendStatus(204);
            _context6.next = 16;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            connection.end();
            console.log(_context6.t0);
            res.status(500).json({
              err: _context6.t0
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 11]]);
  }));

  return function updateTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;
//# sourceMappingURL=tasks.js.map