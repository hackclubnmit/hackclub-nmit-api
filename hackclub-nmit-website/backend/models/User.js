const mongosee = require('mongoose');

const Schema = mongosee.Schema;

const userschema = new Schema({
    
    name : { type:String , required:true},
    email : {type:String , required:true, unique:true},
    password:{type:String , required:true },
    phone:{type:Number , required:true},
})

module.exports = mongosee.model('User',userschema);