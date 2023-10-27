const { mongo } = require("mongoose");
const mongoose = require("mongoose");



const mechanicianSchema = new mongoose.Schema({
    name:String,
    deleted:Boolean,
    phone:String,
    location:{
        type:{type:String},
        coordinates:[Number]
    }
});

// mechanicianSchema.index({
//     location: "2dsphere",
// });

module.exports= mongoose.model("mechanician",mechanicianSchema,"Mechanicians");