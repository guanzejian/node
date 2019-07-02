// 引入express 框架
var express = require('express');
// 创建 web 服务器 
var app = express();
// 路由
app.get("/",function(req,res){
	// end()  响应字符串 （乱码）
	// send() 响应字符串 （自动识别）
	// render() 响应字符串 （自动识别）
 	res.send("啊啦啦啦啦<a href='http://www.baidu.com'>百度一下，你就知道！</a>")
});

// 启动服务
app.listen(8080,function(){
	console.log("启动成功")
})