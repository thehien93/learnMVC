const express = require('express')
const router = express.Router()

const meController = require('../app/controller/MeController')


router.get('/stored/courses', meController.createCourses)

module.exports = router