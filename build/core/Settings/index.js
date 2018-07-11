"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _convict = require("convict");

var _convict2 = _interopRequireDefault(_convict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = (0, _convict2.default)({
	env: {
		doc: "The application environment.",
		format: ["prod", "dev", "test"],
		default: "development",
		env: "NODE_ENV"
	},
	app: {
		name: {
			doc: "The application name.",
			format: String,
			default: "My Node Application"
		},
		version: {
			doc: "The application version.",
			format: '*',
			default: 'none',
			env: 'npm_package_version'
		},
		ip: {
			doc: "The IP address to bind.",
			format: "ipaddress",
			default: "127.0.0.1",
			env: "IP_ADDRESS"
		},
		port: {
			doc: "The port to bind.",
			format: "port",
			default: 8080,
			env: "PORT",
			arg: "port"
		}
	}
});

// Load environment dependent configuration
var env = settings.get('env');
settings.loadFile('./config/' + env + '.json');

// Perform validation
settings.validate({ allowed: 'strict' });

exports.default = settings;
module.exports = exports["default"];