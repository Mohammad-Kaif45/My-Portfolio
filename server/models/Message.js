const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true }); // This automatically records exactly when they sent the message -> time stamp

module.exports = mongoose.model('Message', messageSchema);