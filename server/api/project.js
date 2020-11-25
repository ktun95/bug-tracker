const express = require('express');
const router = express.Router();
const { Project, User, Issue, UserProject } = require('../database/index')

//GET all of a user's projects
router.get('/:userId', async (req, res, next) => {
    // const { id, username } = req.user
    const userId = req.params.userId
    console.log('gettting projects for user ', userId)
    try {
        const { Projects } = await User.findOne({
            where: {id: userId},
            include: Project
        })
        // console.log('okay here are the projects', projects)
        res.json(Projects)
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const { id, username } = req.user
    const data = req.body
    
    try {
        const project = await Project.create({
            name: data.name,
            description: data.description,
            ManagerId: id
        })
        await project.setUsers(id)
        res.json(project)
    } catch (err) {
        console.error(err)
        next(err)
    }
})

module.exports = router
