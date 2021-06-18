const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const mongoose = require('mongoose');
const User = mongoose.model("User");
const Comment = mongoose.model("Comment");

module.exports = async (req, res, next) => {
    const {commentId} = req.params;
    const comment = await Comment.findById(commentId);
    if(!comment.postedBy.equals(req.user._id)) {
        return res.status(401).json({ error: "You cannot delete somebody else's comment." });
    }
    next();
}