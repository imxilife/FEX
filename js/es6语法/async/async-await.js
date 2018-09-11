/**
 
async和await 是 ES7提出来实现异步代码的方式 

1、async 返回的是一个Promise
2、async 加在函数前面
3、await不能用于普通函数必须是有async标识的函数

 */

async function getJSON(){
    console.log(await fetchData());
}

