const express = require('express');
const Router = express.Router();
const {BlogController} = require('../Controller');
const validate = require('../Middleware/validate');
const {blogValidation} = require('../validation');
Router.get('/api/blogs', BlogController.getBlogs);
Router.post('/api/blogs', validate(blogValidation.createBlog), BlogController.createBlog); ;

module.exports = Router;