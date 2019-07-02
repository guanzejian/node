var http = require("http");
var fs = require("fs");
var url = require("url");
var queryString = require("querystring");

var msgs = [];

var server = http.createServer();
server.on('request',function(req,res){
	var current = req.url;
	if(current == '/'){
		fs.readFile('./view/index.html','utf8',function(err,data){
			if(err){res.end('404 Not Found')};
			var html = '';
			msgs.forEach(function(item){
				html += `<li>${item.time}:-------${item.name}:-------${item.content}</li>`
			})
			var data = data.replace("^_^",html);
			res.setHeader("Content-Type",'text/html; charset=utf-8');
			res.write(data);
			res.end();
		})
	}else if(current == '/add'){
		fs.readFile('./view/add.html','utf8',function(err,data){
			if(err){res.end('404 Not Found')};
			res.setHeader("Content-Type",'text/html; charset=utf-8');
			res.write(data);
			res.end();
		})
	}else if(current.indexOf('/public') != -1){
		fs.readFile('./'+current,'utf8',function(err,data){
			if(err)res.end("404 Not Found");
			res.write(data);
			res.end();
		})
	}else if(current.indexOf('/doadd') != -1){
		if(req.method == "POST"){
			var postData = '';
			var paramObj;
			req.on("data",function(chunk){
				postData += chunk;
			})
			req.on("end",function(){
				// queryString 将字符串转换成对象
				paramObj = queryString.parse(postData);
				var d = new Date();
				// var time = d.getFullYear()+"-"+d.getMonth()+'-'+d.getDate()+" "+d.getHours()<10?"0"+d.getHours():d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
				var time = `${d.getFullYear()}-${zero(d.getMonth()+1)}-${zero(d.getDate())} ${zero(d.getHours())}:${zero(d.getMinutes())}:${zero(d.getSeconds())}`;
				// console.log(time)
				var msg = {name:paramObj.name,content:paramObj.content,time:time};
				msgs.push(msg);
				// 跳转
				res.setHeader('Location','/');
				res.statusCode = 302;
				res.end();
			})
		}else{
			// 接受参数
			var paramObj = url.parse(req.url,true).query;
			// 入库，（这里放进数组中）
			var d = new Date();
			// var time = d.getFullYear()+"-"+d.getMonth()+'-'+d.getDate()+" "+d.getHours()<10?"0"+d.getHours():d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
			var time = `${d.getFullYear()}-${zero(d.getMonth()+1)}-${zero(d.getDate())} ${zero(d.getHours())}:${zero(d.getMinutes())}:${zero(d.getSeconds())}`;
			// console.log(time)
			var msg = {name:paramObj.name,content:paramObj.content,time:time};
			msgs.push(msg);
			// 跳转
			res.setHeader('Location','/');
			res.statusCode = 302;
			res.end();
			
			
		}
	}else{
		fs.readFile('./view/index.html','utf8',function(err,data){
			if(err){res.end('404 Not Found')};
			res.setHeader("Content-Type",'text/html; charset=utf-8');
			res.write(data);
			res.end();
		})
	}
});
server.listen(8080,function(){
	console.log("服务器启动成功 http://localhost:8080")
})

// 处理时间
function zero(data){
	return data<10?"0"+data:data;
}