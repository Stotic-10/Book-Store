const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    language: {
        type: Array,
        required: true
    }
})

const userModel = mongoose.model('userTbl', userSchema);

module.exports = userModel;