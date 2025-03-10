const Joi = require('joi');

const envVarsSchema = Joi.object({
    DB_CONNECTION: Joi.string().required(),
    PORT: Joi.number().default(3000),
    NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
}).unknown();

module.exports = envVarsSchema;