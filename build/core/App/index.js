'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _Router = require('core/Router');

var _Router2 = _interopRequireDefault(_Router);

var _ErrorHandler = require('middlewares/ErrorHandler');

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _ResponseHeaders = require('middlewares/ResponseHeaders');

var _ResponseHeaders2 = _interopRequireDefault(_ResponseHeaders);

var _Settings = require('core/Settings');

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
	// initialize server
	var server = _restify2.default.createServer({
		name: _Settings2.default.get('app.name'),
		version: _Settings2.default.get('app.version'),
		url: 'Settings.get(\'app.ip\'):Settings.get(\'app.port\')'
	});

	// setup server
	server.use(_restify2.default.plugins.acceptParser(server.acceptable));
	server.use(_restify2.default.plugins.queryParser());
	server.use(_restify2.default.plugins.bodyParser());
	server.use(_ResponseHeaders2.default);
	server.on('restifyError', _ErrorHandler2.default);

	_Router2.default.applyRoutes(server);

	server.listen(_Settings2.default.get('app.port'), function () {
		console.log('%s listening at %s', server.name, server.url);
	});
};

exports.default = App;
module.exports = exports['default'];