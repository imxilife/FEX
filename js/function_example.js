/* 

function add(a,b) {
  console.log(a+b);
}

add.username = "lishan"; //函数添加属性
console.log(add.username);

add.say = function () {  //函数添加方法
  console.log("hi word");
};

console.log(add.say());

//作为值使用
var  array = [add];  // 数组的元素

console.log(array[0](1,3));  //对象的的方法

var obj = {
  'name':'xiaoming',
  'age':18,
  'fn':add,
};

console.log(obj.fn(2,4)); */


/* //函数的定义
console.log(sum()); //输出 I’m function
function sum(){
  console.log("I'm function");
}
//console.log(sum());   //输出 I'm function
console.log(summ());  //报错
var summ = function (params) {
  console.log("hello world");
};
//console.log(summ());  //输出 hello world */


//定义的位置

/* function  add(params) {
  console.log('add');  //add
  function fn(params) {
    console.log('fn');  //fn
    function fn3(params) {
      console.log('fn3');  //fn3
      fn2();   //fn2
    }
    fn3();
  }
fn();
  function fn2(params) {
    console.log('fn2');
  }
}
add();

var person = {
  'age':3,
  'name':'kelly',
   'setAge':function (age) {
     this.age = age;
   },
};
person.setAge(29);
console.log(person.age);
 */


 //函数的调用
/* var vbr = function (){
  console.log('vbr');
}();   //自执行函数

 (function(){
  console.log('out');
}());
(function(){
  console.log('log');
})();

!+-~ function (params) {
    console.log('params');
}();

function fabore(num){
    if(num<=1) return 1;
    return num*fabore(num-1);
  }

  var a = fabore(9);
  console.log('a='+a); */




function factorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * arguments.callee(num - 1);
}

var a = factorial(10);
console.log(a);




function add(num1,num2){
  return num1+num2;
}


//实参比形参少的
add(1);  //undefined

//实参比形参多的
add(1,2,3,4,56);  //3






