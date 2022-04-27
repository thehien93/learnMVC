module.exports = {
    mutipleMongooseToObject: function (monngooseArrays) {
        return mongoose.map(mongoose => mongoose.toObjech())
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject(): mongoose
    }
}