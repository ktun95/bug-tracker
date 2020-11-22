const express = require('express');
const router = express.Router();
const { Project, User } = require('../database/index')

// router.get('/', async (req, res, next) => {
//     const { id, username } = req.user
//     console.log(Issue)
//     try {
//         const issues = await User.findOne({
//             where: {username},
//             include: Issue
//         })
//         console.log(issues.dataValues.Issues)
//         res.json(issues.dataValues.Issues)
//     } catch (err) {
//         console.error(err)
//         next(err)
//     }
// })

router.post('/', async (req, res, next) => {
    const { id, username } = req.user
    const data = req.body
    try {
        const project = await Project.create({
            name: data.name,
            description: data.description,
        })
        await project.setUser(id)
        res.json(project)
    } catch (err) {
        console.error(err)
        next(err)
    }
})

module.exports = router
