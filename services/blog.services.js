const {Blog} = require('../Model');
const createBlog = async(body) => {
    
        await Blog.create(body);
        
      
}

const getBlog = async() => {
    const blog = await Blog.find({});
    
}

module.exports = {
    createBlog,
    getBlog
};