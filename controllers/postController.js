const Post = require('../models/model')

exports.createPost = async (req, res) => {
    const posts = new Post({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
    });

    try {    
        const newPosts = await posts.save();
        res.status(201).json(newPosts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
}

exports.getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the contact form submissions' });
    }
    
};
