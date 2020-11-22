const express = require('express');
const router = express.Router();
const { Issue, User } = require('../database/index')

router.use('*', (req, res, next) => {
    if (!req.user) res.sendStatus(401)
    next()
})

router.get('/', async (req, res, next) => {
    const { id, username } = req.user
    console.log(Issue)
    try {
        const issues = await User.findOne({
            where: {username},
            include: Issue
        })
        console.log(issues.dataValues.Issues)
        res.json(issues.dataValues.Issues)
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const { id, username } = req.user
    const data = req.body
    try {
        const issue = await Issue.create({
            subject: data.subject,
            description: data.description,
        })
        await issue.setUsers(id)
        res.json(issue)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id 
    const { userId, username } = req.user
    const data = req.body 
    try {
        const issue = await Issue.destroy({
            where: { id }
        })
        res.json(issue)
    } catch (err) {
        next(err)
    }
})

router.get('/:user', (req, res, next) => {
    console.log(req.user)
})

module.exports = router
