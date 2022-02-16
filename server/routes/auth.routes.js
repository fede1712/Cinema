const express = require('express')
const router = express.Router();

const User = require('../models/User.model')
const handleMongooseError = require('../utils/index')
const bcrypt = require("bcrypt")
const bcryptSalt = 10

//Register
router.post('./signup', (req, res) => {
    const { username, email, password } = req.body

    User

        .findOne({ email })
        .then(user => {
            if (user) {
                res.status(400).json({ code: 400, messagge: 'Email already exists' })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, email, password: hashPass })
                .then(() => res.json({ code: 200, message: 'User created' }))
                .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', errors: handleMongooseError(err) }))
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})

//Login

router.post('/login', (req, res) => {
    const { pwd, email } = req.body

    User
        .findOne({ email })
        .them(user => {
            if (!user) {
                res.status(401).json({ code: 401, message: 'Email not registered' })
                return
            }
            if (bcrypt.compareSync(pwd, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorrect password' })
                return
            }

            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', errors: handleMongoooseError(err) }))
})


router.get('/logout', (req, res) => {
    req.session.destroy(() => res.json({ message: 'Logout successful' }));
})



router.post("/isloggedin", (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router