var express = require('express');

var app = express();

// 配置框架
app.engine('html',require("express-art-template"))
app.use('/public',express.static('public'))

// 路由
app.get('/',(req,res)=>{
	res.render('index.html')
})

app.listen(8080,()=>{
	console.log("Running...")
})