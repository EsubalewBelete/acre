
const BlogSchema = require('../validation/blogValidate.js');
const catchAsync = require('../Utils/catchAsync.js');
const {blogservices} = require('../services');
const httpStatus = require('http-status');
const createBlog = catchAsync(async(req, res) => {
        await blogservices.createBlog(req.body);
        res.status(httpStatus.CREATED).send({success: true, message: 'Blog created successfully'});
      
}) 

const getBlog = catchAsync(async(req, res) => {
    const blog = await blogservices.getBlog(req.body);
    res.status(httpStatus.OK).send({success: true, blog});
})

module.exports = {
    createBlog,
    getBlog
};