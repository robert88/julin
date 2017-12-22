
/*不压缩代码必须加载之前使用*/
process.argv[2]="-debug"

//文件操作
require("./rap.util.prototype.js")
var wake = require("./rap.filesystem.js")

function templ(json,templStr){
    templStr = templStr.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/("|')/g,"\\\$1")
    //templStr = templStr.replace(/\\/g,"\\\\").replace(/("|')/g,"\\\$1")
        .replace(/\n/g,"\"+\n\"")
        //循环
        .replace(/\{\{#each\s+([^}]+)\s*\}\}/g,function(m,m1){
            return "\"+(function(){try{var $length ="+m1+"&&"+m1+".length; var t=\"\";"+m1+"&&"+m1+".forEach(function($value,$index){ \n t+= \""
        })
        .replace(/\{\{#endEach\s*\}\}/g,"\"});return t;}catch(e){console.log(e&&e.stack)}}()) +\"")
        //ifelse
        .replace(/\{\{#if\s+([^}]+)\s*\}\}/g,function(m,m1){
            return "\"; try{if("+m1.replace(/\\/g,"")+"){ t+=\""
        }).replace(/\{\{#elseIf\s+([^}]+)\s*\}\}/gi,function(m,m1){
            return "\"; }else if("+m1.replace(/\\/g,"")+"){ t+=\""
        }).replace(/\{\{#else\s*\}\}/g,function(m,m1){
            return "\";}else{ t+=\""
        }).replace(/\{\{#endIf\s*\}\}/gi,function(m,m1){
            return "\"}}catch(e){console.log(e&&e.stack)} t+=\""
        })
        //变量
        .replace(/\{\{\s*([^}]+)\s*\}\}/g,function(m,m1){
            return "\"+"+m1.replace(/\\/g,"")+"+\""
        })
    var result = "with(obj){ debugger;var t =\""+templStr.replace(/\+$/,"")+"\"} return t;"
    //return result;
    var fn = new Function("obj",result);
    return fn(json);
}

var config = JSON.parse(wake.readData("../../../enterprise/en/cloud-computing/01私有云.json").replace(/\s+/g," "))
var html = wake.readData("../../../enterprise/en/cloud-computing/index-temple1.html");
var lastData = templ(config,html);
wake.writeData("../../../enterprise/en/cloud-computing/"+config.filename+".html",lastData)
