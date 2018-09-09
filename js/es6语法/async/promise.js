

//promise  

/*理念:
是ES6新提出的一个概念，用来解决回调地狱的问题。它的解决方法是把任务执行和结果分离。                        
执行成功将结果通过resolve回调出去，执行失败通过reject回调出去。resolve调用会返回一个新的promise
所以如果有多个任务需要执行且是类似同步效果可以通过不断的then()方法来实现。*/

/* 
                                                                    




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

/* let a = 5 > 4;
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
} */

//Promise运行原理总结
/* 
1、要通过Promise做异步操作 首先得创建一个Promise对象，把要执行的任务作为参数传入
   如果要得到任务执行的结果，还要传入resolve,reject 如test()方法

2、一旦创建Promise对象不需要你做什么，任务会自动执行，也就是说一旦创建完Promise对象，任务就开始执行了。

3、Promise的then(arg1,arg2)方法是用来接收任务执行完的结果的(这个在new Promise()返回的对象就可以调用then方法了)，
   这个方法有两个参数，需要传入两个回调函数，一个是成功的回调，一个是执行失败的回调。
   成功的结果由resolve传出，失败的结果由reject传出

4、任务是可以无限级联的，比如有一个多步执行操作，每一步都依赖上一步的结果，那么就可以这样 then().then().then()，
   连续的then方法下去，直到所有步骤都执行完成。(每一步的then都会返回一个新得promise的对象，这是得以级联的关键)

5、最后任务的执行异常是可以捕获的，什么意思呢，就是说你可以在创建Promise对象后然后.catch()方法，获取任务执行过程中的异常。      

*/

/* 

问题:
1、为什么promise后面可以接着跟.catch()方法
2、then()返回的数据后面为什么能在下一个then中返回呢 then返回的到底是什么?
*/

function test(resolve,reject){
  let total = 100;
  let sum = 0;
  console.log('start');
  for(let i = 0;i<total;i++){
      sum += i;
  }
  if(sum>5050){
    console.log('你真棒');
    resolve("你真棒:"+sum);
  }else{
    reject('sb');
  }
}

let p = new Promise(test);  //step1 对象创建完成后会自动执行test()方法，这里传入了resolve和reject是用来回调任务执行成功和错误的结果
p.then(function(params) { //step2 任务执行完成后 会通过then方法，传入的两个回调函数来接收任务执行的结果。
  console.log(params);
}/* ,function(params) {
  console.log('fuck the world');
} */).catch(function (params) {
  console.log('error');
});
/* 
p.catch(function () { //如果任务执行过程中出现错误，通过catch来捕获。
  console.log('aaaa');
}); */


