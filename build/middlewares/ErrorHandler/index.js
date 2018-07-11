'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _httpStatus = require('http-status');

var ErrorHandler = function ErrorHandler(req, res, err, callback) {
	res.statusCode = err.code || _httpStatus.INTERNAL_SERVER_ERROR;
	res.json(res.statusCode, { message: err.message, success: false });
	return callback();
};

exports.default = ErrorHandler;
module.exports = exports['default'];