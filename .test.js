const Post = require('./models/model')

exports.createPost = async (req, res) => {
    const posts = new Post({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const newPost = await posts.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
}