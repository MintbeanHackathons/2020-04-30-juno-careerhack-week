// comment endpoints
const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req, res) => {
    Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const comment = req.body.comment;
    // const date = Date.parse(req.body.date);

    const newComment = new Comment({
        username,
        comment
        // date,
    });

    newComment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>{

})

module.exports = router;