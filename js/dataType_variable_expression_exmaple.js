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

 var  a = 1;  //可以在全局的环境中访问到
 function fn(){
   var a = 2;
   console.log(a);  //a的生命周期就是函数块，一旦函数执行完毕 a的"寿命"就到头了
                    //打印a的时候会在局部的环境中先找 看没有a 如果有就用a 没有就在外层找
                    //原则就是一层一层找，只能由内向外找不能由外向内找
 }


