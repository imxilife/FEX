/**
 * 1、对象的创建方式
 * 2、对象的使用
 * 3、原型链和原型模式
 * 
 * 
 */


/**
 
 面向对象: 对代码的一种抽象，对外统一提供调用接口的编程思想
 基于原型的面向对象

 原型: JS函数中由prototype属性引用了一个对象即原型对象(原型)


  闭包：
  
  What&How 
        定义: 闭包是一个拥有许多变量和绑定了这些变量的环境的表达式(通常是一个函数).
              说白了就是函数的嵌套，内层函数可以使用外层函数的所有变量，即使外层函数已经执行完毕。比如

      function fn() {
        var i = 9;
        console.log(i);
      }
      函数内的变量i在外面是直接访问不到的， 如果要访问就要用到闭包。

      function fn() {
        var i = 9;
        funtion fn1() {
          return i;
        }
        return fn1;
      }
      var ret = fn();
      console.log(ret()); //9
 
   1、闭包解决的一个问题是在全局环境中也能访问到局部变量 比如
   2、让访问的变量保留在内存中 比如 i;   
   
   闭包的优缺点:
      优点: 有利于封装，可以访问局部变量
      缺点: 内存占用浪费严重，谨慎使用.
   
    -------------------------------------------------华丽の分界线------------------------------------------------------------------

    一、对象的声明的三种方式

    1.1、字面式
    var person = {

      name:'zs',
      sex:'male',
      fun:funciton(fnc){
        console.log(fnc);
      }
    }
    调用: person.name = 'lisi';

    1.2、通过Object构造函数创建对象
    var obj = new Object();
    obj.name = 'zs';
    obj.sex = 'male';
    obj.fun = function study(){
      console.log('i'm study);
    }

    Object 是所有对象的基类，根、所有的javascript对象都是由Object延伸的.

    1.3、JS中构造方法声明对象
    function test([参数列表]){
      this.属性 = 属性值,
      this.方法 = function(){
        //do something
      }
    }
    var obj = new test(参数列表);

    //注意: this 代表当前对象，函数内部只能通过this来访问属性和方法

    1.4 JS工厂方式声明对象
    function createObject(name,age){
      var obj = new Object();
      obj.name = name;
      obj.age = age;
      obj.run = function(){
        return this.name + this.age +"运行中...";
      }
      return obj;
    }

    1.4 JS中原型模式声明对象
    function test(){
      test.prototype.属性 = 属性值;
      test.prototype.属性 = 属性值;
      test.prototype.方法名称 = function(){
        //do something
      }
    }
    var obj = new test();   
    注: 
    1、任何JS方法或函数 都自带一个prototype属性，且它以对象的形式存在 也就是说 prototype是对象
    2、原型模式根本： 函数本身声明为空内容，利用prototype定义一些属性及方法，让所有实例化的对象都拥有它包含的属性及方法
    
    第一步:定义空函数
    function test(){
       
    }
    第二步 用prototype对象创建属性和方法
    test.prototype.color = 'red';
    test.prototype.width = 3;
    test.prototype.height = 5; 
    test.prototype.show() = function(){
      console.log("color:"+this.color+"|"+"width:"+this.widht+"|"+"height:"+this.height);
    }

    var car = new test();
    car.show();

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - 华丽の分界线-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

二、对象遍历和存储
    2.1 遍历通过 for...in..来遍历
    for(var i in object){
      console.log(object[i]);
    }
  
    2.2 对象存储在堆中，通过引用变量找到定义的对象

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - 华丽の分界线-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

三、原型和原型链
  


    
 * 
 */