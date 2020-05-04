const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    author: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    contentURL: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    }
}, {
    timestamps: true,
});

const Articles = mongoose.model('Articles', articleSchema);

module.exports = Articles;