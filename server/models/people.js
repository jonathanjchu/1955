const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: false
    },
    month: {
        type: Number,
        required: false
    },
    day: {
        type: Number,
        required: false
    },
    last_name: {
        type: String,
        required: true,
        minlength: 2
    },
    first_name: {
        type: String,
        required: true,
        minlength: 2
    }
}, {timestamps: true});

mongoose.model("Person", PersonSchema);