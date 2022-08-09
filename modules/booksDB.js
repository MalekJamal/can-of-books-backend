'use strict';
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/books");

const BookSchema = new mongoose.Schema({
    // Filed Name :  Data Type of this filed
        title:String,
        description:String,
        status: String,
    });

const BookModel = mongoose.model('BookModel',BookSchema);  

module.exports = BookModel;