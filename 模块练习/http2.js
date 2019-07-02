var http = require("http");

var server = http.createServer();
server.on("request",function(req,res){
	res.setHeader("Content-Type","text/html;charset=utf-8");
	if(req.url == "/login"){
		res.write("欢迎登录！")
	}else if(req.url == "/"){
		res.write("请先注册！")
	}else{
		res.write("404")
	}
	res.end();
})
server.listen(8080,function(){
	console.log("服务器已启动")
})