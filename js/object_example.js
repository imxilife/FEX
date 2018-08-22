

//闭包
/* function f1(){
  var n = 999;
  nAdd = function () {  //这里nAdd函数之所以能在全局中执行是因为他不是var定义的，所以在执行f1函数后它就被赋值了，也就能在全局中执行了。
    n = n+1;
    console.log(n);
  };
  function f2(){
    console.log(n);
  }
  return f2;
}


var rs = f1();
rs(); //999
nAdd(); //这里执行了
rs(); //1000 说明n是保留在内存中的，所以n才会输出1000 */


//字面量式
/* var person = {
  name:"xiaoming",
  age:18,
  fun:function study(params) {
    console.log('i can study');
  }
};
person.fun();

//Object构造函数式
var obj = new Object();
obj.name = 'sh';
console.log(obj.name); 


//js构造方法声明对象
function person(name,age,sex){
  this.name = name;
  this.age = age;
  this.sex =sex;
  this.fun = function () {
    console.log('hello');
  };
}
  var per = new person('xiaom', 19, 'male');
  console.log(per.name);
*/

/*     function createObject(name, age) {
      var obj = new Object();
      obj.name = name;
      obj.age = age;
      obj.run = function () {
        return this.name + this.age + "运行中...";
      };
      return obj;
    }

    var box1 = createObject('zs',18);
    var box2 = createObject('ls',20);
    console.log(box1.run());
    console.log(box2.run()); */


    //原型模式创建对象

/* 
    function test(){
    }
    
    test.prototype.color = 'red';
    test.prototype.width = 3;
    test.prototype.height = 5;
    test.prototype.show = function () {
        console.log("color:" + this.color + "|" + "width:" + this.width + "|" + "height:" + this.height);
    };
    var car = new test();
    car.show();
 */


 //遍历
/*  var obj = {
   name:'xm',
   age:19,
   fun:function () {
     console.log('i\'m here');
   }
 };

 for(var i in obj){
   console.log(obj[i]);
 } */


/*  var person = {

 };
 console.log(person.prototype); */

/* var object = new Object();
console.log(object.prototype); */
/* 
function person() {

}

person.prototype.name = 'zs';
person.prototype.age = 19;
person.prototype.fun = function (params) {
  console.log('say hello');
};

var person1 = new person();
var person = new person();
console.log(person.age);
console.log(person.name); 
console.log(person1.age);
console.log(person1.name);

print(person.prototype);
print(person._proto_);
print(person.prototype === person._proto_);




var obj = new Object();
console.log(Object.prototype._proto_);


function fn(){
  var i = 0;
  function f1(){
    return i;
  }
  return f1;
} */


/* var person = function(){};
var p = new person();
console.log(p._proto_); */

//原型和原型链
/* var person = function () {
};
person.prototype.say = function () {
  console.log('今天天气不错');
};

person.prototype.salary = 5000;

var programmer = function () {
};

programmer.prototype = new person();
programmer.prototype.wcd = function () {
  console.log('明天天气不错');
};
programmer.prototype.salary = 10000;

var p = new programmer();  // p._proto_ ==> programmer.prototype == > p1 = new person() , p1._proto_ ==>person.prototype
p.say();  //今天天气不错
p.wcd(); //明天天气不错
console.log(p.salary); //10000 */

//原型继承
/* function person(name,age){
  this.age = age;
  this.name = name;
}

person.prototype.say  = function () {
  console.log('名字是:'+this.name);
};

function student(){

}

var p1 = new person();
p1.say =function () {
  console.log('我是P1对象');
};
p1.name = 'lisi';
p1.age = 19;

student.prototype = p1;
student.prototype.grade = 3;
student.prototype.test = function () {
  console.log(this.grade);
};

var s = new student();
s.say(); //s._proto_ ==>student.prototype == > p1 p1._proto_ ==>person.prototype ==>person.prototype.say(); 注:p1 = new person();
s.test();   
console.log(p1 === student.prototype);  */
/**
 * 原型链的查找模式是 先从对象自己的方法或属性中去找 s.say()，如果找不到就是对象原型对象中找 student.prototype，如果原型对象又被赋值到另外一个对象，那么就从这个对象中找p1.say，如果这个对象也找不到就是对象的构造函数的
 * 原型对象中找 person.prototype，最后都没有返回undefined
 */


//构造函数继承
/* function parents(name,age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log('父亲的名字是:'+this.name);
  };
}

function child(name,age) {
  this.obj = parents;
  this.obj(name);  
  this.age =age;
  this.sayC = function () {
    print('child:'+this.name+'------'+this.age);
  };
}

var c = new child('李四',20);
c.sayC();
//李四 ---> this.obj(name); --> parents(name) -->this.name = name = '李四'
//this.sayC --->this.name-->parents -->this.name
//父对象 被子类对象继承 所有的属性和方法 都将传递到子类对象中

function print(value) {
  console.log(value);
} */

//call 和apply 实现继承

/* function  person(name,age,height) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.say = function () {
    print(this.name+"---"+this.age+"----"+this.height);
  };
}

function teacher(name,age,height){
   person.call(this,name,age,height);
}

var teacher = new teacher('张山',20,190);
print(teacher.say()); */


















































