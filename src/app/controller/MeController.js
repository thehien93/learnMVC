const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class  MeController {
    
    //[GET / me/stored/courses]
    createCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored_course', {courses: mutipleMongooseToObject(courses)}))
            .catch(next)
           
    }
    
}

module.exports = new MeController()