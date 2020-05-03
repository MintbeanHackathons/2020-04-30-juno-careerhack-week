const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: {
        type: number,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    title: {
        type: string,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    author: {
        type: string,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    contentURL: {
        type: string,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    comments: {
        userName: {
            type: string,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        date: {
            type: number,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        comment: {
            type: string,
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