var express = require('express');  
var router = express.Router();  
var querystring = require('querystring');
/* GET home page. */  
router.get('/', function(req, res, next) {  
  res.render('index', { name: 'Express 路由1' });  
});  
  
/* GET home page. */  
router.get('/cors', function(req, res, next) {  
  res.render('test/index', { name: 'Express 路由1' });  
});  
  
/* GET home page. */  
router.get('/getData', function(req, res, next) { 
  res.json(200, {name:"张三1",age:40});
});  
router.get('/getArticeById', function(req, res, next) { 
  console.log(req.query)
  res.json(200, {name:"张三1",age:40});
}); 
  
router.post('/addArtice', function(req, response, next){
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
     // 解析参数
        // body = querystring.parse(body);
        body = JSON.parse(body || '{}');
        // 设置响应头部信息及编码
        // response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(body.title && body.sideTitle && body.content) { // 输出提交的数据
          let nowDate = new Date();
          nowDate = nowDate.getFullYear() + '.' +(nowDate.getMonth() + 1) + '.' + nowDate.getDate()
          let artice_writeFile = require('./api/artice_writeFile')
          artice_writeFile.main(nowDate, body, response, function(resData){
              response.status(200).json({code:200,msg:"maunsell",data:resData});  
          })
        }else {  // 输出表单
          response.status(200).json({code:400,mes:"参数不能为空",data:null});
        }
    })
})
module.exports = router;