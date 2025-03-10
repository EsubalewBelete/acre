const config = require('../config/config.js');
const ApiError = require('../Utils/ApiError.js');
const httpStatus = require('http-status');
const mongoose = require('mongoose'); // Ensure mongoose is imported
const logger = require('../config/logger.js');
const errorConverter = (err, req, res, next) => {
    let error = err;
    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || (error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR);
        const message = error.message || httpStatus[statusCode];
        error = new ApiError(statusCode, message);
    }
    next(error);
};

const errorhandler = (err, req, res, next) => {
    const { statusCode, message } = err;
    const response = {
        error: true,
        code: statusCode,
        message,
        ...(config.env === 'development' && { stack: err.stack }),
    };
    if (config.env === 'development') {
        logger.error(err);
    }
    res.status(statusCode).send(response);
};

module.exports = { errorConverter, errorhandler };