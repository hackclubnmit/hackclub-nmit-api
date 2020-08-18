const mongosee = require('mongoose');
const User = require('./User');

const Schema = mongosee.Schema;

const eventschema = new Schema({
    title : { type:String , required:true},
    date : {type:Date},
    feedback:[{type:String}],
    host:{ type: mongoose.Types.ObjectId, required: true, ref: 'User' }, 
});

module.exports=mongosee.model('Event',eventschema);