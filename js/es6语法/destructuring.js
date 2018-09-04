

//解构: 从数组和对象中提取值，对变量进行赋值，这被称为解构


//以前给变量赋值的做法, 为变量赋值 只能指定指
//ES5
/* let a = 1;
let b = 2;
let c = 3;
console.log(a);
console.log(b);
console.log(c);
*/

//使用解构后的做法  可以从数组或对象中提取值 按照对应关系 对变量赋值

//ES6
/* let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c); */


//ES5
/* var obj = {
    name:'jelly',
    age:23
};
console.log(obj.name);
console.log(obj.age); */

//ES6
/* let  {name, age} = {name:'jerry',age:23};
console.log(name);
console.log(age) */

//通过解构返回更多值 , 以前返回多个值用的是对象  现在是解构
/* function calcYearRetirement(year){
    var  today = new Date().getFullYear();
    return [today-year, 65-(today-year)];
}

let [age,retirement]  = calcYearRetirement(1990);
console.log(age);
console.log(retirement);
 */




