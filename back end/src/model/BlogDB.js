const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/blog-app');
//  mongoose.connect('mongodb+srv://navi:N1kobme0a4RSdnPW@cluster0.de7kc.mongodb.net/articles?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var articleSchema = new Schema({ //Schema is used to structurize the DB
    name: String,
    username: String,
    upvotes: Number,
    comments: Array
});

var ArticleInfo = mongoose.model('articles', articleSchema); //Mentioned articles collection name in to the schema


module.exports = ArticleInfo; // Then exported