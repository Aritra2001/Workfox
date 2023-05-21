const mongoose = require('mongoose')
require('mongoose-type-email')

const Schema = mongoose.Schema

const loginSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
        
    },
    contact: {
        type: Number,
        required: true
    },
    brandname: {
        type: String,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Application', loginSchema)