const newsRouter = require('./news')
const course = require('./course')

function route(app) {
    app.use('/', newsRouter)
    app.use('/course', course)

}

module.exports = route