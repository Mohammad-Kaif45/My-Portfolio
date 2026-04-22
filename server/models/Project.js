const mongoose = require('mongoose'); // mongoose 

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tech: {
        type: [String], // This tells to  MongoDB to expect an array of strings (e.g., ['React', 'Node'])
        required: true
    },
    github: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Automatically adds createdate and add date

module.exports = mongoose.model('Project', projectSchema); 