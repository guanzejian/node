var path = require("path");

// dirname  去最后一层
// basename 取最后一层
var testdata = "https://www.baidu.com/jj/kk/path.html";

console.log("1、"+path.extname(testdata));  // .html
console.log(path.basename(testdata))
// path.html
console.log(path.dirname(testdata))
testdata = path.dirname(testdata);
// https://www.baidu.com/jj/kk
console.log(path.basename(testdata))
// kk

