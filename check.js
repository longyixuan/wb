var fs = require('fs');
var dirPath = require('path');
var clc = require('cli-color');
var filePath = dirPath.resolve(__dirname); //当前文件夹目录
var fileArr = []; //读取文件存储数组
var ignores = ['node_modules', 'dist','.git']; //需要忽略的文件夹
var includeCode = ['考生姓名','error-message']; //包含代码
function startCheck(path) {
    var files = fs.readdirSync(path); //同步读取文件列表
    files.forEach(function (filename, index) {
        if (ignores.includes(filename)) {
            console.log(clc.yellow(filename + "已经忽略"))//忽略文件夹
        } else {
            var stats = fs.statSync(path + '/' + filename);
            if (stats.isFile()) { //如果是文件
                var text = fs.readFileSync(path + '/' + filename,"utf-8")
                for(var i = 0; i<includeCode.length;i++) {
                    if (text.match(includeCode[i])) {
                        console.log("匹配到" + clc.bgCyan(includeCode[i])+"：",clc.red(path + '/' + filename))
                        fileArr.push(path + '/' + filename)
                    }
                }
                
                writeFile(fileArr);
            } else if (stats.isDirectory()){ //如果是文件夹
                console.log(clc.green(filename + "是文件夹"))
                startCheck(path + '/' + filename);
            }
        }
    })
};
var url = filePath + "/" + "warningList.md";
function writeFile(data) {
    var data = data.join("\n");
    fs.writeFile(url, data + '\n', function (err) {
        if (err) throw err;
        // console.log("写入成功");
    });
}
if (fs.existsSync(url)) {
    fs.unlinkSync(url);
}
startCheck(filePath);
