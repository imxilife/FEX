/* 
var a = 3;
var b = a;
b++;
console.log("a="+a+"|"+"b="+b);

var obj = {"name":"张三"};
var obj1 = obj;
obj1.name = "李四";
console.log("obj1.name="+obj1.name+"|"+"obj.name="+obj.name);

var d;
console.log(d);

var c=3,e=4;

c = c+e;
e = c-e;
c = c-e;
console.log("c="+c+"|"+"e="+e);

var a1 = [];
var a2 = [];
console.log(a1==a2);
console.log(a1===a2);
var a3 = 4;
var a4=[4];
console.log(a3==a4);
console.log(a3===a4);
console.log(a4.toString);

console.log(typeof a3);
console.log(a4 instanceof Array);
console.log(typeof a4);


var a = {name:"xm"};
var b = [4];

var c = [a.name,b];

a = c[1];
b = c[0];
console.log(a[0]);

console.log(b);

var num = 15;
if(num>5){
  
  //var name = 'ax';
  function setName(params) {
    var name = 'ax';  //name变成了局部变量
  }
}
//console.log(name);  //js没有块级作用域

function fn(params) {
  //  var x = y = 1;
    var x = y;
    y = 1;

    console.log(x);
    console.log(y);
}
fn();
/* console.log(y);
console.log(x); */

/* var name = 'xm';
function fn(){
  name = 'xh';
  console.log(name);
}
fn();
console.log(name);
 */


//变量作用域

var a = 1; //可以在全局的环境中访问到
function fn() {
  var a = 2;
  console.log(a); //a的生命周期就是函数块，一旦函数执行完毕 a的"寿命"就到头了
  //打印a的时候会在局部的环境中先找 看没有a 如果有就用a 没有就在外层找
  //原则就是一层一层找，只能由内向外找不能由外向内找
}

//作用域链
var name = "xm";
function fn(params) {
  var age = 18;
  function fn2(params) {
    var sex = 'male';
  }
  //fn.sex
  //fn.fn2
    //fn2 sex
}


console.log(window.name === name);
console.log(window.fn === fn);

var name = 'xm';
function fn(params) {
  var name = 'xh';
  var sex = 'male';
  function fn2(params) {
    var name = 'xhei';
    var age = 18;
  }
}

//变量对象分析
/**
 * 
 * 全局作用域对象
 *  window
 *      -name
 *      -fn
 *       fn 局部变量对象
 *          -name
 *          -sex
 *          -fn2
 *           fn2 局部变量对象
 *               -age
 *               -name
 * 
 */


//js解析机制

var name = 'xm';
var age = 18;
function fn(params) {
  console.log(name);
  var name = 'xh';
  var age = 18;
}

/**
 * 
 * window
 *    -name = undefined
 *    -age = undefined
 *    fn 拿过来啥都不做
 * 
 * fn 
 *   -name = undefined
 *   -age = undefined
 */

 var a = 9; 
 var age = 10; 
 var a = 10; //预解析 变量名冲突的情况下 都是undefined

 var a = 19;  //预解析过程中 函数名和变量名冲突的情况下 以函数名为主
 function a(){
   var a = 10;
   return a;
 }


 function b(){  //预解析过程中 函数名名冲突的 以最后一个函数名为主
   return 13;
 }

 function c(){
   return 12;
 }

 function b(){
   return 15;
 }


 //JS预解析详解

 //情况一
 console.log(a); //undefined
 var a = 1;

 //情况二
 console.log(a); //报错
 a = 1;

 //情况三
 console.log(a); //function a{...}
 var a =1; 
 console.log(a); //1
 function a(params) {
   console.log(2);
 }

 //情况四
 var a = 3;
 console.log(a);  //3
 function a(params) {
   console.log(4);
 }
 console.log(a); //3
 a(); //报错

//预解析是分标签进行的
//情况五
var a = 1;
function fn(){
  console.log(a);
  var a = 2;
}
fn();
console.log(a);

//情况六
var a = 1;
function fn(params) {
  console.log(a);
  a = 2;
}
fn();   //1
console.log(a);  //2

//情况七
var a = 1;
function fn(a) {
  console.log(a);  //函数的参数当成局部变量预解析
  a = 2;
}
fn(); //undefined
console.log(a); //1

//情况八
var a = 1;
function fn(a) {
  console.log(a);
  a = 2;  //这里只是把参数改成了2 修改的是局部变量 对全局的a是没有影响的。
}
fn(a); //1
console.log(a);  //1(局部参数修改不会影响到全局的a输出)









