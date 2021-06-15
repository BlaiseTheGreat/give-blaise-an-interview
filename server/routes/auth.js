const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const requireLogin = require('../middleware/requireLogin');




router.post('/signup', (req, res) => {
    const { username, email, company, password } = req.body;
    if (!email || !password || !username) {
        return res.status(422).json({ error: "Please add all the required fields." })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User with this email already exists." })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        username,
                        email,
                        company,
                        password: hashedpassword
                    })

                    user.save()
                        .then(user => {
                            res.json({ message: "Saved successfully!" })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })

        })
        .catch(err => {
            console.log(err);
        })
})


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).json({ error: "Please fill both required fields." });
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                res.status(422).json({ error: "Invalid Email or password" });
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // res.json({ message: "Successfully logged in!" });
                        const token = jwt.sign({_id: savedUser._id}, JWT_SECRET)
                        res.json({token});
                    } else {
                        return res.status(422).json({ error: "Invalid Email or password" });
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        })
})


module.exports = router;