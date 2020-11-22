const express = require('express');
const router = express.Router();
const { User } = require('../database/index')

router.post('/', async (req, res, next) => {
    const data = req.body
    console.log(data)
    try {
        const user = await User.create({
            subject: data.subject,
            description: data.description
        })
        console.log(user)
        res.json(user)
    } catch (err) {
        console.error(err)
        next(err)
    }
})

module.exports = router
