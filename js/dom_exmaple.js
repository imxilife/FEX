
//document.write()会在body中增加一个节点 写入的内容就是增加的节点内容
document.write('<h1>create new node and add to end of body</h1>');

//一、创建节点之API

//create系列方法

//创建li元素并添加到ul中
var ul = document.getElementById('myList');
var li = document.createElement('li');   //创建元素节点
var text = document.createTextNode('my li'); //创建文本节点
li.appendChild(text);//将文本节点插入li中
ul.appendChild(li);//将li加入到ul节点中 以上就是动态创建节点并给创建的节点加入内容

//综合使用
var comment = document.createComment('desc');
var ul = document.getElementById('myList');
var fragment = document.createDocumentFragment();
var li = null;
for(var i =0 ; i<3;i++){
  li = document.createElement('li');
  li.appendChild(document.createTextNode('item' + i));
  fragment.appendChild(li); //li插入到文档片段中
}
ul.appendChild(fragment);
document.body.insertBefore(comment,document.body.firstChild);


//outerHTML
var content = document.getElementById('content'); //div id= content
console.log(content.outerHTML());














