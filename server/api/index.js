const express = require('express');
const router = express.Router();

router.use('/issue', require('./issue'))
router.use('/project', require('./project'))
router.use('/user', require('./user'))


module.exports = router
