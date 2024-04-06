const mongoose = require('mongoose');
const connect = mongosse.connect('mongodb://localhost27017/login-tut')

connect.then(() => {
    console.log('database connected sucessfully')
})
.catch(() => {
    console.log('database cannot be connected')
})

// create a schema 
const LoginSchema = new mongosse.Schema({
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
})

// collection part 
const collection = new mongoose.model('users', LoginSchema)

module.exports = collection;