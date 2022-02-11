const express = require('express'); //importing express
const cors = require('cors');
const ArticleInfo = require('./src/model/BlogDB'); // importing mongodb
const path = require('path');

const app = express(); // creating a new object for express as app //object initialization
app.use(cors());
app.use(express.urlencoded({ extended: true })); //For POST Method
app.use(express.json());
app.use(express.static('./build/'));


   

//Basic article fetch route
app.get('/api/article/:name', (req, res) => {// to fetch general data
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    
    try {
    const articleName = req.params.name;
    ArticleInfo.findOne({ name: articleName })
    .then(function (article) { //findOne is used to find the first matching data and return save to 'articles'
        res.status(200).json(article);//display as json file
    })

}
catch (error) {
    res.status(500).json({ message: 'Error', error});
}

});

//Upvotes routing
app.post('/api/article/:name/upvotes' , (req, res) => {
    const articleName = req.params.name;
    const filter = { name : articleName};
    const update = { $inc: { upvotes : 1} };
    ArticleInfo.findOneAndUpdate(filter, update, { new: true })
    .then(function (article) {
     res.json(article);
    
    })
})

//comments routing
app.post('/api/article/:name/comments', (req, res) => {
    const articleName = req.params.name;
    const { username, text } = req.body;
    const filter = { name : articleName};
    const update = { $push : { comments : { username, text } } };
    ArticleInfo.findOneAndUpdate(filter, update, { new: true } )
    .then(function (article) {
        res.json(article);
       
       })
})

app.get('/*', function(req, res)  {
    res.sendFile(path.join(__dirname + '/build/index.html'));
   
   });
   




app.listen(5001, () => { //port number
    console.log("Listening on port 5001");
})