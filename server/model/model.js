//mongo db scheme

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String

}); //define shape and content of the document

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;
