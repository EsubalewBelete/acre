const winston = require('winston');
const { format, createLogger } = winston;
const { combine, timestamp, printf, colorize, uncolorize } = format;
const config = require('./config.js');
const winstonFormat = format.printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack ||message}`;
});
const logger = createLogger({
    level: config.env === 'development' ? 'debug'
        : 'info',
    format: format.combine(
        format.timestamp(),
        winstonFormat,
        config.env==='production'?format.colorize():format.uncolorize()
    ),     
    transports: [new winston.transports.Console()],
});

module.exports = logger;