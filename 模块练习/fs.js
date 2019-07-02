var fs = require("fs");

// 练习
// 写文件
// fs.writeFile('./a.txt',"你好，橙子",function(err){
// 	// err == null  成功
// 	// err != null  失败
// 	if(err == null){
// 		// console.log(err);
// 		return;
// 	}
// })

// 读文件
fs.readFile("./a.txt",function(err,data){
	// data  是一个buffer对象，需要进行转换,用toString， 或者在readFile中加参数，utf8;
	if(err){
		console.log(err);
		return;
	}
	console.log(data.toString());
})

fs.readFile('./a.txt','utf8',function(err,data){
	if(err){
		console.log(err);
		return
	}
	console.log(data)
})