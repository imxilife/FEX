
// spread operator  展开表达式 这主要是对于数组这类多数据的结构，不用for循环，直接用...代替获得数组的每个元素

function addFourAges(a,b,c,d) {
  return a+b+c+d;
}

var sum = addFourAges(18,20,22,30);
console.log(sum);

//ES5
var args = [18,20,22,30];
var sum2 = addFourAges.apply(null,args);
console.log(sum2);


//ES6

const age = addFourAges(...args);  //直接获得了数组的每个元素
console.log(age);

const familySmith = ['john','mark','jerry'];
const familyMiller = ['mary', 'bob', 'ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);
