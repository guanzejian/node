var http = require("http");
var fs = require("fs");

// 创建web服务器
var server = http.createServer();
// 监听请求
server.on('request',function(req,res){  // req 请求，res 响应
// req.headers  获取请求头信息（对象）
// req.rawHeaders  获取请求头信息 （数组）
// req.httpVersion 获取http 版本
// req.method     获取请求方法
// req.url    获取请求路径

// res.statusCode = 404
// res.statusMessage = "Not Found"
// res.setHeader('Content-Type','text/html;charset=utf-8')
// 简化版
// res.writeHeader(404,'Not Found',{'Content-Type':'text/html;charset=utf-8'})
// res.write("数据")
// res.end() 结束
	console.log("收到用户请求,请求地址："+req.url)
	res.setHeader('Content-Type','text/html;charset=utf-8');
	res.write('hello 橙子');
	res.end();
});
//启动 服务
server.listen(8080,function(){
	console.log("服务启动成功，访问： http://localhost:8080")
});