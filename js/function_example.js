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


//函数的定义
console.log(sum()); //输出 I’m function
function sum(){
  console.log("I'm function");
}
//console.log(sum());   //输出 I'm function
console.log(summ());  //报错
var summ = function (params) {
  console.log("hello world");
};
//console.log(summ());  //输出 hello world








