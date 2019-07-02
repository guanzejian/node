
### node+vue+axios+elementUI
REPL 
- read 读取用户输入的js代码
- exec 执行用户输入的js代码
- print 打印用户输入的js代码
- loop 循环（后续所有js代码执行都会循环以上命令）

> 自定义 node.js模块
~~~
写法1 ：
 exports.属性/方法名 = 功能
写法2 ：
 module.exports.属性/方法名 = 变量名；
写法3 ：
 var 对象 = require（‘路径及文件名’）；
~~~	
> node.js 内置模块
~~~js
os 系统模块:
os.EOL
主机名： os.hostname()
操作系统： os.type()
操作系统平台： os.platform()
内存总量： os.totalmem()
空闲内存： os.freemem()
~~~
~~~js
path模块：
dirname  去最后一层
basename 取最后一层
~~~
~~~js
url 模块：
url.parse("url网址",true) 可以解析网址；
url.parse中的true 可以把解析出的数据改成对象格式；
~~~
~~~js
fs 模块：
两个方法常用：
writeFile ：创建文件   fs.writeFile("./a.txt","信息",function(err){ err == null 成功，不为null 则有错})
readFile : 读取文件  fs.readFile('./a.txt',"utf8",function(err,data){
//	utf8 是让读取的文件显示正确的编码； 也可以不写（在需要的数据上写 toString() 方法）
})
~~~

~~~js
npm 使用：
--save 缩写 -S  记录生产环境所需的模块
--save-dev 缩写 -D  记录开发环境所需模块
-g  全局安装，安装后的模块可以在命令行使用
~~~

~~~js
nrm 国内服务器
安装npm i nrm -g
查看：nrm ls  (list 的缩写)
切换： nrm use 服务器名 （nrm use taobao）
测速： nrm test npm
~~~

~~~js
模块： 在node 中 就是一个文件
 包： N 个模块、目录、package.json等组成，然后发布，让别人require
 
 自定义发布： node login &  ndoe publish
~~~

~~~js
文件被修改，自动重启文件修改
初始化npm  ：  npm init -y
安装： npm i nodemon -g -D 
使用： nodemon 服务器文件名 （nodemon app.js）
使用后：每次保存后，文件都会自动重新启动
~~~

~~~js
moment.js 处理时间的第三方模块
~~~

### express 和 art 模板引擎
~~~js
express 框架：
1、文件初始化： npm init -y
2、npm i express  
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

art 模板引擎
npm i art-template
npm i express-art-template

express路由：
HTTP 请求类型：get/ post /delete /put等

app.http请求类型(请求路径,回调函数)
特性： get只能接受get请求，post 只能接受post请求，或者all

app.use(请求路径，回调函数)
特性： 匹配所有类型请求
	use 属于非完全匹配（ps：只需要url 前面匹配请求路径即可匹配）
	/public/css/test.css
	app.use(".public",function(){}) 这样就ok了
路由参数：
app.http请求类型(请求路径/:a/:b，function(){})
~~~