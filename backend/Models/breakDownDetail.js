const { mongo } = require("mongoose");
const mongoose = require("mongoose");



const breakDownDetailSchema = new mongoose.Schema({

    title:String,
    fixes:[{type:mongoose.Schema.Types.ObjectId,ref:'fixes'}],
    

});


module.exports= mongoose.model("breakDownDetail",breakDownDetailSchema,"breakDownDetail");