const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,   
    },
    description: {
        type: String,
        required: true,   
    }
})

const Post = mongoose.model('posts', postSchema)

module.exports = Post;