

var http = require('http'); 
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node JS</h1>');
    res.write('<p>hello world</p>');
    res.end();
}).listen(8080);

/* 
异步IO 和 事件
异步是任务不立即执行而是将其加入到事件队里里面，任务可以快速加入但执行是单向的
事件:所有的异步执行完毕都会发送一个事件到事件队列.
*/

var EventEmitter = require('events').EventEmitter;  //EventEmitter可以理解成事件注册器
var event = new EventEmitter();
event.on('submit',function () { //function是具体的回调函数
  console.log('hello world');
});
  setTimeout(function () {
      event.emit('submit');   // submit对应是要执行的事件,funtion(){...}是具体的回调函数.  event.on(event,callback)将事件和回调注册到event事件处理队里中，等待执行的时候，调用事件,执行回调 返回结果
  },1000);


  var fs = require('fs');
  var ret;
  var file = fs.readFile("./test.html",function (err,date) {
      if(err){
          console.log('err');
      }else{
       ret = date;
       console.log(ret);
      }
  });