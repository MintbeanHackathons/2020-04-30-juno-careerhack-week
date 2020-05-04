const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
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
    },
    comments: {
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        date: {
            type: Number,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        comment: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        }
    },
}, {
    timestamps: true,
});

const Articles = mongoose.model('articles', articleSchema);

module.exports = Articles;