import restify from 'restify';

import Router from 'core/Router';
import ErrorHandler from 'middlewares/ErrorHandler';
import ResponseHeaders from 'middlewares/ResponseHeaders';

import Settings from 'core/Settings';

const App = () => {
	// initialize server
	const server = restify.createServer({
		name: Settings.get('app.name'),
		version: Settings.get('app.version'),
		url: `Settings.get('app.ip'):Settings.get('app.port')`
	});

	// setup server
	server.use(restify.plugins.acceptParser(server.acceptable));
	server.use(restify.plugins.queryParser());
	server.use(restify.plugins.bodyParser());
	server.use(ResponseHeaders);
	server.on('restifyError', ErrorHandler);

	Router.applyRoutes(server);

	server.listen(Settings.get('app.port'), function () {
		console.log('%s listening at %s', server.name, server.url);
	});
}

export default App;