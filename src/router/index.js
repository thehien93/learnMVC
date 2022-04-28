const newsRouter = require('./news')
const course = require('./course')
const meRouter = require('./me')

function route(app) {
    app.use('/', newsRouter)
    app.use('/me', meRouter)
    app.use('/course', course)

}

module.exports = route