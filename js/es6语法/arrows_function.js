
'use strict'

//arrows functions rules for write

/* (params) => {    
    //function body
}; */

//Note: only params、 arrows and execute code.
//With the arrow function, there are multiple arguments using parentheses, and multiple execution statements using braces

//ES5 
/* var array = [56, 78, 9, 99, 100];
array.map(function (value,index,array) {
    console.log('value:'+value+'|'+'index:'+index)
}); */


//ES6
/* let array = [56,78,9,99,100];
 array.map((value,index,arr) =>{  //multiple aruments and multiple execution situation
    console.log("value:"+value);
    console.log("index:"+index);
}); 
array.map(value => console.log(value)); //Don't need parentheses if arrows function only have one argument or one execution statement. */

//ES5
/* var  name  = {
    color:'green',
    position:1,
    clickMe:function () {
        document.querySelector('green_btn').addEventListener('click',
        function () {
            console.log('this block color is '+this.color+' | '+' and position is'+this.position+' is click');
        });
    }
}
name.clickMe();  //undefined   because this is in common function and this value direct to window object. */

//ES6  使用箭头函数不会出现调用对象方法中的普通函数出现this的地方打印不对的情况，原因是箭头函数中的this会有持有父函数的this环境
/* var  bolck = {
    color:'green',
    position:'1',
    clickMe:function () {
        document.querySelector('green_btn').addEventListener('click',()=>{
            console.log('this block color is ' + this.color + ' | ' + ' and position is' + this.position + ' is click');  // this block color is green and this position is 1 and green is click
        });
    }
} */



