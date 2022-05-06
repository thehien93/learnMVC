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
            let formData = { ...req.body };
            formData.image = `https://www.youtube.com/watch?v=${req.body.videoId}`;
            let course = new Course(req.body);
            course.save()
              // fetch(course)
              .then(() => res.redirect("/"))
              .catch((error) => {});
          }
        // [GET]sourse/:id/edit
        edit(req, res, next) {
           Course.findById(req.params.id)
           .then(course => res.render('layouts/edit', {course: mongooseToObject(course)}))
           .catch(next)
           

        }
        //[PUT] /course/:id
        update(req, res, next) {
            Course.updateOne({_id: req.params.id} , req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
        }
        //[DELETE]
        destroy(req, res, next) {
           Course.deleteOne({_id: req.params.id})
           .then(() => res.redirect('back'))
           .catch(next)
        }
}

module.exports = new CourseController()