/**
 
DOM 操作

C U R D 操作
创建节点
删除节点
增加节点
修改节点

1.1、创建节点 create API
  document.createTextNode(); //文本节点
  document.createDocumentFragment() //创建文档片段
  document.createComment(); //注释节点
  document.createElement(); //创建元素

1.2 
    innerHTML 用来设置或获取当前标签的起始和结束里面的内容
      写模式: 
      var content = document.getElementById('content');
      var str = "this is a <strong> paragraph</strong> with a list following it.</p>
          <ul>
            <li>Itme1</li>
            <li>Item2</li>
            <li>Item3</li>
          </ul>"
      content.innerHTML = str;

      读模式:
      console.log(content.innerHTML);

      限制: 1、字符串的最左边不能出现空白 IE6-8会自动移出它
            2 大多数浏览器不会对script标签进行脚本执行操作  //1、要执行必须设置属性 2、defer script标签要在有作用域的元素之后
            3、不能单独创建meta sytle link等元素

    outerHTML 返回调用它的元素的及所有子节点的HTML标签
    innerText 
    outerText 


2、新增节点 API
3、修改节点 API
4、删除节点 API

 */