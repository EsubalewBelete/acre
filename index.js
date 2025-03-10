const config = require('./config/config.js');
require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./Model/blogModel.js');
const app = require('./server.js');
const http = require('http');
const logger = require('./config/logger.js');

mongoose.connect(config.dbConnection)
    .then(() => logger.info('Connected to MongoDB'))
    .catch(err => logger.error('Could not connect to MongoDB', err));


const httpServer = http.createServer(app);
const server = httpServer.listen(config.port, () => {
    logger.info(`Server is running at ${config.port}`);
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});