const Joi=require('joi');
const BlogSchema=Joi.object({
    body:Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required()
    })
})
module.exports={
    BlogSchema}
