const Joi=require('joi');
const logger=require('../config/logger.js');
require('dotenv').config();

const {envVarsSchema}=require('../validation');
const {error,value:envVars}=envVarsSchema.validate(process.env);

if(error){
    logger.error(`Config validation error: ${error.message}`);
}

module.exports={
    dbConnection:envVars.DB_CONNECTION,
    port:envVars.PORT,
    env:envVars.NODE_ENV,
};