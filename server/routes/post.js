const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');



router.get('/allcomments', (req, res) => {
    res.send("get route for all comments!");
})

router.post('/createcomment', (req, res) => {
    const { body } = req.body
    if(!body){
        return res.status(422).json({error: "Please add in a comment before posting."});
    }
    console.log(req.user);
    res.send("ok");
    // const comment = new Comment({
    //     body
    // })
})


module.exports = router;