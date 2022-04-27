const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
class  CourseController {
    
        show(req, res, next) {
           Course.findOne({ slug: req.params.slug})
           .then(course => 
               res.render('layouts/courseDetail', {course: mongooseToObject(course)})
           )
           .catch(next)
    }
    
        create(req, res, next) {
            res.render('layouts/create')
        }
        store(req, res, next) {
        const formData = req.body
        req.body.image = `https://www.youtube.com/watch?v=${req.body.videoId}}`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .cath(error => {
            }) 

        }
        }

module.exports = new CourseController()