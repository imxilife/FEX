

//回调地狱: 对于一个多步完成的IO操作，在javascript是通过异步+回调的方式实现的，我们试图在逻辑上让程序逻辑上从上至下执行，会在上一步的回调结果中处理当前事情并传递下一步回调
//当回调的层数过多，导致代码难以阅读和理解，这就是所谓的回调地狱

/**
 * function: getUserAvatar with id
 */
function fetchDataFromServer(){
  setTimeout((url) => {
     //step1 getIDs
     const array = getIDS(url);

     //step2 getavatar
     let avatar
     let avatars = [];
     setTimeout((ids) => {
        for(let i=0; i<ids.lenght;i++){
          avatar = getAvatar();
          avatars.push(avatar);
        }
        updateUI(avatars);  //如果回调的嵌套过多 导致代码难以读
     }, 1200,array);
  }, 10000, "http://www.xxxx.com/api?getIds");

}

function getIDS(url) {
  return (array = [1001, 1002, 1005, 100056]);
}

function getAvatar() {
  return "http://www.xxx.avatar_xxx.jpg";
}

function updateUI(avatars){
  //update avatar
}

