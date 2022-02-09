const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog-app');
const Schema = mongoose.Schema;

var articleSchema = new Schema({ //Schema is used to structurize the DB
    name: String,
    username: String,
    upvotes: Number,
    comments: Array
});

var ArticleInfo = mongoose.model('articles', articleSchema); //Mentioned articles collection name in to the schema


module.exports = ArticleInfo; // Then exported