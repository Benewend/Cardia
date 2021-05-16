var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();

const saltRounds = 10;



router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('../../Models/User');


// CREATES A NEW USER
router.post('/register', function (req, res) {

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            User.create({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                phone:req.body.phone,
                password : hash
            }, 
            function (err, user) {
                if (err) return res.status(500).send({msg:"There was a problem adding the information to the database.",err:false});
                res.status(200).send({msg:"User well saved",err:false,data:user});
            });
        });
    });
    
});



// login
router.post('/login', function (req, res) {
    User.findOne({email:req.body.email,deleted:false,activated:true},(err,qUser)=>{
        if( err) res.status(500).send({msg:"an error has occured", error:err});
        // Load hash from your password DB.
        if(qUser){
            bcrypt.compare(req.body.password, qUser.password, function(err, result) {
                if(err) res.status(500).send({msg:"an error has occured", error:err});
                if(result){
                    var token = jwt.sign({ id: qUser._id },process.env.SECRET, {
                        expiresIn: 86400 // expires in 24 hours
                      });
                    res.status(200).send({ auth: true, token: token ,error:false,user:qUser});
                }else{
                    res.status(200).send({ auth: false, msg:"Check out the credencials", error:true});
                }
            });
        }else{

            res.status(200).send({ msg:"This user account is not activated or doesn't exist ", error:true});
        }
       
    });
    
});


module.exports = router;