const catchAsync = require('../Utils/catchAsync.js');
const { createBlog, getBlog } = require('../services/blog.services.js');
const httpStatus = require('http-status');

const createBlogController = catchAsync(async (req, res) => {
    await createBlog(req.body);
    res.status(httpStatus.CREATED).send({ success: true, message: 'Blog created successfully' });
});

const getBlogController = catchAsync(async (req, res) => {
    const blogs = await getBlog();
    res.status(httpStatus.OK).send({ success: true, blogs });
});

module.exports = {
    createBlog: createBlogController,
    getBlogs: getBlogController
};