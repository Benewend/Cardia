var express = require('express');
var app = express();
var db = require('./db');
const cors = require('cors');
// var UserController = require('./controllers/UserController/UserController');
var HomeController = require('./controllers/HomeController/homeController');


app.use(cors());
app.use('/home', HomeController);
// app.use('/auth',AuthController);
// app.use('/message',MessageController);
// app.use('/box',SecurityBox);
// app.use('/typeofsubscription',TypeOfSubscription);
// app.use('/subscription',Subscription);
// app.use("/events",Events)
// app.use("/sensors",Sensor);
// app.use("/sensormodels",ModelSensor);
// app.use("/boxmodel",ModelBox);
 
module.exports = app;