

//promise  是ES6新提出的一个概念，用来解决回调地狱的问题。它的解决方法是把任务执行和结果分离。                         pending
//执行成功将结果通过resolve回调出去，执行失败通过reject回调出去。resolve调用会返回一个新的promise
//所以如果有多个任务需要执行且是类似同步效果可以通过不断的then()方法来实现。

//1、promise是一个对象 通过new方法产生                                                                                \|/ 
//2、promise有三种状态 pending、resolve、reject                                                                            \/_      _\|
//3、promise                                                                         reslove     reject   




/* var p1 = new Promise(function (resolve, reject) {
  console.log('start new Promise...');
  var timeOut = Math.random() * 2;
  console.log('set timeout to: ' + timeOut + ' seconds.');
  setTimeout(function () {
    if (timeOut < 1) {
      console.log('call resolve()...');
      resolve('200 OK');
    } else {
      console.log('call reject()...');
      reject('timeout in ' + timeOut + ' seconds.');
    }
  }, timeOut * 1000);
});

var p2 = p1.then(function (r) {
  console.log('Done: ' + r);
});

var p3 = p2.catch(function (reason) {
  console.log('Failed: ' + reason);
});

console.log(p1 === p2);
console.log(p2 === p3);
console.log(p3 === p1); */

/* setTimeout(() => {
  console.log('this is timeout two second output');
}, 1000); */

let a = 5 > 4;
function runAsync() {
  return new Promise(function (reslove,reject) {
    console.log('start...');
    setTimeout(() => {
      if(a){
        reslove('说点什么呢');  //这里的结果必须通过reslove输出
      }else{
        reject('出错了哦');
      }
    }, 1000);
  });
}

runAsync().then(sucess,error);

function sucess(params) {
  console.log(params);
}

function error(err) {
  console.log(err);
}

