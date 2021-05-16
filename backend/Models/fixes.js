const { mongo } = require("mongoose");
const mongoose = require("mongoose");



const fixesSchema = new mongoose.Schema({
    title:String,
    contentToFix:String,
    reason:String,
    creation:{type:Date,default:Date.now}
});


module.exports= mongoose.model("fixes",fixesSchema,"fixes");