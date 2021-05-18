"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Hello", {
  enumerable: true,
  get: function get() {
    return _Hello["default"];
  }
});
Object.defineProperty(exports, "World", {
  enumerable: true,
  get: function get() {
    return _World["default"];
  }
});

var _Hello = _interopRequireDefault(require("./Hello"));

var _World = _interopRequireDefault(require("./World"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
