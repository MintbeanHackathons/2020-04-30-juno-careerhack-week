// user endpoints
const router = require('express').Router();
let User = require("../models/user.model");


router.route('/').get((req, res) =>{

    // .find is a mongoose method that will give a list of users from atalas, returns a promise (json format)
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err));
});

// POST request 
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    // .save method saves to database
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// need for all router files 
module.exports = router;