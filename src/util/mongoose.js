module.exports = {
    mutipleMongooseToObject: function (monngooseArrays) {
        return mongoose.map(mongoose => mongoose.toObject())
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject(): mongoose
    }
}