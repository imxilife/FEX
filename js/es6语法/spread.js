
// spread operator  展开表达式 这主要是对于数组这类多数据的结构，不用for循环，直接用...代替获得数组的每个元素

/* function addFourAges(a,b,c,d) {
  return a+b+c+d;
}

var sum = addFourAges(18,20,22,30);
console.log(sum); */

//ES5
/* var args = [18,20,22,30];
var sum2 = addFourAges.apply(null,args);
console.log(sum2); */


//ES6

/* const age = addFourAges(...args);  //直接获得了数组的每个元素
console.log(age);

const familySmith = ['john','mark','jerry'];
const familyMiller = ['mary', 'bob', 'ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily); */


//rest parameters  rest最大的功能就是将一堆不是数组的数字转成数组的形式,从而可以利用数组的方法

//ES5
/* function isFullAgg5(){
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function (cur) {
    console.log((2018-cur)>=18);
  });
}

isFullAgg5(2016,1998,2007,1990);
isFullAgg5(1990,1999,1965,2016,1987); */

//ES6
/* function isFullAge6(limit, ...years) {   //这里不用slice切成数组了  直接通过...将传入的数字转成数组
  years.forEach(cur => console.log(2018-cur >= limit));
} */
//isFullAge6(18,2008,1988,2003,1980,1996,1998);

//Default parameters 默认参数

//ES5
/* function SmithPerson(firstName,lastName,yearOfBirth,nationlity){
  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationlity === undefined ? nationlity = 'american' : nationlity = nationlity ;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationlity = nationlity;
}

//ES6
function SmithPerson(firstName, lastName = 'Smith', yearOfBirth, nationlity = 'american'){
  this.lastName = lastName;
  this.nationlity = nationlity;
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
}
 */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Map 类似于Java中的HashMap 正确的写法是 map(key,value) map中的key和value可以是任何类型 如果向已有的密钥中添加值，则新值覆盖旧值  key不重复


const question = new Map();
question.set('question','What is the official name of the laster major JavaScript version?');
question.set(1,'ES5');  //key is number
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', '3'); //key is String
question.set(true, 'Correct answer :D'); // key is boolean

//C 、U、 R、 D

question.set('name','kelly');  //add key-value to map
 
question.delete('name'); //delete value by special key

question.get('name'); //get value with key

question.has('name'); //if exist key boolean

question.clear(); // clear all element

//for each 遍历
/* Map.array.forEach((key,value) => {
  console.log(`this is key ${key} and it is value ${value}`);
}); */

//entries() 遍历
/* for(let [key,value] of question.entries()){
  if(typeof(key) === 'number'){
    console.log(`Anser ${key}:${value}`);
  }
}
*/

////////////////////////////////////////
// Classes

//ES5
var Person5 = function (name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =job;
};

Person5.prototype.calcAge = function (yearOfBirth) {
  return 2018 - yearOfBirth;
};

var person5 = new Person5('Kelly',1988,'SoftwareEngineer');

console.log(person5.name+"|"+person5.yearOfBirth+"|"+person5.job);


//ES6

class Person6{
  constructor(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =job;
  }

  calculateAge(){
    return 2018- this.yearOfBirth;
  }

  static greeting(){
    console.log('this is great');
  }
}

const jonh6 = new Person6('John',1990,'software engineer');

console.log(jonh6.name);
Person6.greeting();


/////////////////////////////////
//Classes and subcalsses















