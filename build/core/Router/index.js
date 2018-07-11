'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restifyRouter = require('restify-router');

var _HealthCheck = require('controllers/HealthCheck');

var _HealthCheck2 = _interopRequireDefault(_HealthCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _restifyRouter.Router();

router.get('/health-check', _HealthCheck2.default);

exports.default = router;
module.exports = exports['default'];