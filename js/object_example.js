

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






