const { mongo } = require("mongoose");
const mongoose = require("mongoose");



const GroupOfBreakDownSchema = new mongoose.Schema({

    title:String,
    deleted:false,
    breakDownDetails:[{type:mongoose.Schema.Types.ObjectId,ref:'breakDownDetail'}],
    

});


module.exports= mongoose.model("GroupOfBreakDown",GroupOfBreakDownSchema,"GroupOfBreakDown");