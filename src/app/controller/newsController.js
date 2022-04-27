const Course = require('../models/Course')

class NewsController {
    index(req, res, next) {
        Course.find({})
            .then(courses => res.render('home',{courses}))
            .catch(next)
        }
        search(req, res) {
            res.render('search')
    }
}

module.exports = new NewsController