
'use strict';

//ES6 新增两种变量的的定义关键字  let和const
//const 用来定义一个不能被覆盖的常量，通常用来定义固定不变的值
//let 声明变量，有块级作用域。

//ES5  var 
/* function debug(isprint) {
    if (isprint) {
        var message = 'This is debug message';
        console.log("if  inner"+message);
    }
    console.log("if outter"+message);
}

debug(true);  // if inner "This is debug message"  'if outter This is debug message' */

//ES6 let 、const
/*  function debug(isprint) {
    if(isprint){
        let message = "This is debug message";
        console.log(message);
    }
    console.log(message);
}

debug(true);  //message is not defined */

/* const  name = 'kelly';
name = 'Jimmy';   // The name is const variable can't overwriter */

/* let name = 'Jimmy';

function print(params) {
    console.log(name);
}

print(name);

function fn(params) {
    let name = 'Hebe';
    function fn2(params) {
        let age = 9;
        console.log(name);
    }
    fn2();
    console.log(age);  // can't not found age variable (the scope chain) 
}
fn(); */

//ES5 var 没有块级作用域 i会被for循环中的i替换
/* var i = 9;
for(var i = 0;i<5;i++){
    console.log('output');
}
console.log(i); -->  5 */

//ES6  let有块级作用域 这里的i不会被替换，for中的i只在循环中有效，执行完就消失了
/* let i = 9;  
for(let i = 0;i<5;i++){
    console.log("output");
}
console.log(i);   --> 9 */



