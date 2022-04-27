const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/addScss_dev',{
            // https://github.com/mongodb/node-mongodb-native/releases/tag/v3.2.1
            useUnifiedTopology: true
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure');

    }
}
module.exports = { connect }