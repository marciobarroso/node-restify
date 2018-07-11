"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var HealthCheck = function HealthCheck(req, res, next) {
	res.send();
	return next();
};

exports.default = HealthCheck;
module.exports = exports["default"];