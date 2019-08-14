//使用express构建web服务器
const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
const index=require('./routers/index');
const login=require('./routers/login');

//设置跨域访问
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// })

//引入路由模块
var app=express();
var server=app.listen(8080);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
//使用路由器来管理路由
app.use("/index",index);
app.use("/login",login);