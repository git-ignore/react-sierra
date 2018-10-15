"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _styledComponents.default.button.withConfig({
  displayName: "button__Button",
  componentId: "sc-18mg1d1-0"
})(["border:2px solid red;"]);

var _default = Button;
exports.default = _default;