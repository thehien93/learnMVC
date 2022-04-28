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
            // let formData = {...req.body}
            // formData.image = `https://www.youtube.com/watch?v=${req.body.videoId}`
            let course = new Course(req.body)
            // course.save()
            window.fetch(course)
                .then(() => res.redirect('/'))
                .catch(error => {}) 

        }
        edit(req, res, next) {
           Course.findById(req.param.id)
           .then(course => res.render('layouts/edit', {course: mongooseToObject(course)}))
           .catch(next)
           

        }
        //[PUT] /course/:id
        update(req, res, next) {
            Course.updateOne({_id: req.params.id} , req.body)
            .then(() => res.redirect('/me/stored/course'))
            .catch(next)
        }
}

module.exports = new CourseController()