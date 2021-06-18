const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const isCommentAuthor = require('../middleware/isCommentAuthor');
const Comment = mongoose.model("Comment");



router.get('/allcomments', (req, res) => {
    Comment.find()
        .populate("postedBy", "_id username company")
        .then(comments => {
            res.json({ comments });
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/createcomment', requireLogin, (req, res) => {
    const { body } = req.body
    if (!body) {
        return res.status(422).json({ error: "Please add in a comment before posting." });
    }
    req.user.password = undefined;
    const comment = new Comment({
        body,
        postedBy: req.user
    })
    comment.save().then(result => {
        res.json({ comment: result })
    })
        .catch(err => {
            console.log(err);
        })
})

router.delete('/:commentId', requireLogin, isCommentAuthor ,async (req, res) => {
    const { commentId } = req.params
    await Comment.findByIdAndDelete(commentId);
    return res.status(200).json({ message: "Comment deleted" });    
})


module.exports = router;