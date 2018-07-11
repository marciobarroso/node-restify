const HealthCheck = (req, res, next) => {
	res.send();
	return next();
};

export default HealthCheck;