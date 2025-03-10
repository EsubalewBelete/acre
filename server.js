const express = require('express');
const app = express();
const blogRouter = require('./Router/blogRouter.js');

const { errorhandler, errorConverter } = require('./Middleware/error.js');
const ApiError = require('./Utils/ApiError.js');
const httpStatus = require('http-status');
const morgan = require('./config/morgan.js');
app.use(morgan);
app.use(express.json());
app.use(blogRouter);
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not Found'));
});

app.use(errorConverter);
app.use(errorhandler);

module.exports = app;