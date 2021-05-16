var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');




router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var groupeOfBreakDown = require('../../Models/GroupOfBreakDown');
var breakDownDetail = require('../../Models/breakDownDetail');
var fixes = require('../../Models/fixes');
var mechanician = require('../../Models/mechanicians');



//get all infos about the breakDowns 
router.get('/breakDowns', function (req, res) {
    
    groupeOfBreakDown.find({deleted:false}).populate({path:"breakDownDetails",populate:{path:"fixes"}}).exec(function (err, GroupeOfBreakDown) {
        if (err) return res.status(500).send("There was a problem finding the users.");
            console.log(GroupeOfBreakDown);
       
            res.status(200).send({error:false,msg:"ok",data:GroupeOfBreakDown});
            
       
    });
  
    
    
});



//get all infos about the breakDowns 
router.post('/mechanician', function (req, res) {
    
    mechanician.aggregate([{
        $geoNear:{
            near:{
                type:"Point",
                coordinates:[req.body.long,req.body.lat]
            },
            distanceField:"dist.calculated",
            maxDistance:20000,
            sperical:true
        }
    },{ $project: {name:1,phone:1, dist: { $round: [ "$dist.calculated", -1 ] } } }],function (err, GroupeOfBreakDown) {
        console.log(err);
        if (err) return res.status(500).send("There was a problem finding the users.");
            console.log(GroupeOfBreakDown);
       
            res.status(200).send({error:false,msg:"ok",data:GroupeOfBreakDown});
            
       
    });
  
    
    
});


module.exports = router;