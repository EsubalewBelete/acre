const Joi=require('joi');

const envVarsSchema=Joi.object({
    DB_CONNECTION:Joi.string().required(),
    PORT:Joi.number().required()
}).unknown();

module.exports= envVarsSchema;