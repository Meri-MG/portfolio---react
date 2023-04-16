const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        unique: true

    },

    content: {
        type: String,
        required: true
    },


    createdAt: {
        type: Date,
        default: Date.now
    },

    image: {
        type: String,
        required: true
    }



});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;