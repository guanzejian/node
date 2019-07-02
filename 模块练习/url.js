var url = require("url");
var data = "http://www.baidu.com?name=zhang&age=18";
console.log(data)
// console.log(url.parse(data))
// console.log(url.parse(data,true))
var data2 = url.parse(data,true);
console.log(data2.query)
console.log(data2.query.name)