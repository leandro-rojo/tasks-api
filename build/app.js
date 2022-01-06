"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = require("dotenv");

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOptions = require("./swaggerOptions");

var swaggerSpecs = (0, _swaggerJsdoc["default"])(_swaggerOptions.swaggerOptions);
(0, _dotenv.config)();
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_tasks["default"]);
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerSpecs));
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map