// articles endpoints
const router = require('express').Router();
let Articles = require("../models/articles.model");


router.route('/').get((req, res) =>{

    // .find is a mongoose method that will give a list of users from atalas, returns a promise (json format)
    Articles.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: '+ err));
});

// POST request 
router.route('/add').post((req, res) => {
    const articles = req.body.articles;
    const newArticles = new Articles({articles});

    

    // .save method saves to database
    newArticles.save()
    .then(() => res.json('Article added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// need for all router files 
module.exports = router;