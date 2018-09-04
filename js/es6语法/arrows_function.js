
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

//ES6  使用箭头函数不会出现调用对象方法中的普通函数出现this的地方打印不对的情况，原因是箭头函数中的this会共享整个环境中的this
/* var  bolck = {
    color:'green',
    position:'1',
    clickMe:function () {
        document.querySelector('green_btn').addEventListener('click',()=>{
            console.log('this block color is ' + this.color + ' | ' + ' and position is' + this.position + ' is click');  // this block color is green and this position is 1 and green is click
        });
    }
} */
//bolck.clickMe()  -->this block is color is green and position is 1 is click


//ES5
/* function Person(name){
    this.name = name;
}

Person.prototype.myFriends = function (friends) {
   
    var array =  friends.map(function (value) {
        return this.name + 'is friends with '+ value;
    }.bind(this));   //没有加bind 报错 原因是 map方法参数中的匿名函数this对象指的是全局的而不是当前对象 加bind是把当前对象绑定上去，函数中this指向的就是当前对象
    console.log(array); 
}; */

/* var friends = ['jack','jane','mark'];
var  person = new Person('kelly');
 person.myFriends(friends);

//ES6 使用箭头函数不用考虑this的包含环境,它会共享当前的this对象
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends = function (friends) {

    var array = friends.map((value) =>{
        return this.name + 'is friends with' + value;
    });
    console.log(array);
};

var friends = ['jack', 'jane', 'mark'];
var person = new Person('kelly');
person.myFriends(friends); */