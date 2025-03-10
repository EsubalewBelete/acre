const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const config = require('./config.js');

const getIPFormat = () => {
    return config.env === 'production' ? 'remote-addr - ' : '';
};

const format = `${getIPFormat()} :method :url :status :response-time ms :user-agent`;

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, '..', 'logs/access.log'),
    { flags: 'a' }
);

module.exports = morgan(format, { stream: accessLogStream });