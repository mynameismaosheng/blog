var express = require("express");  
var http = require("http");  
var path = require('path');
var app = express();  
var router = express.Router();  
var testRouter =  require('./server/router');  

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
    next();
}
app.use(allowCrossDomain)
app.use('/',express.static(path.join('../dist')))
app.use('/data',express.static(path.join('data')))
app.use('/api', testRouter);  
const port = 6789;
http.createServer(app).listen(port,'0.0.0.0',function(){});  
console.log('已打开:'+ port)