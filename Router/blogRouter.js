const express = require('express');
const router = express.Router();
const BlogController = require('../Controller/BlogController');
const validate = require('../Middleware/validate');
const { blogValidation } = require('../validation');

router.get('/api/blogs', BlogController.getBlogs);
router.post('/api/blogs', validate(blogValidation.createBlog), BlogController.createBlog);

module.exports = router;