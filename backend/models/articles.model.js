const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: {
        type: number,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    title: "‘Breathable’ Electronics Pave the Way for More Functional Wearable Tech",
    author: "Yong Zhu (yzhu7@ncsu.edu) & Matt Shipman (matt_shipman@ncsu.edu)",
    contentURL: "https://news.ncsu.edu/2020/04/breathable-electronics/",
    comments: {
        userName: "",
        date: "",
        comment: ""
    },
}, {
    timestamps: true,
});

const Articles = mongoose.model('articles', articleSchema);

module.exports = Articles;