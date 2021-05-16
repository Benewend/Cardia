
// const { text } = require('body-parser');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname:String,
    email: String,
    activated:{ type: Boolean, default:true }, //such you check the user email or phone 
    phone:String,
    password:String,
    accessLevel:{ type: Number, min: 0, max: 3,default:1},
    deleted:{ type: Boolean, default:false }
});




module.exports=mongoose.model("User",UserSchema,"Users");