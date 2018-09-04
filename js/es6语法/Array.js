

//1、转换成数组的方法 ES5 用slice()方法， ES6用from()方法

//ES5
/* const  array = ['green', 'red', 'blue'];

var colors = array.map(function (value) {
    return (value = 'red'); 
});
console.log(colors);



//ES6
const  colorArray = Array.from(array);
colorArray.forEach(value => value.Style.backgroudColor = 'red'); */


//2、loop

//ES5
var array5 = ['a','b','c','d'];
for(var i = 0;i<array5.length;i++){
    console.log(array5[i]);
}

const array6 = [12,34,56];
for (const arry of array6) {
    console.log(arry);
}
