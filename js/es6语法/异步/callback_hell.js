//回调地狱: 在JavaScript完成一项耗时的多步操作，必然是异步的，然后在回调中处理。我们试图在行为逻辑上按照顺序统一执行，因此将前后执行的操作
//嵌套在上一层的回调中，当回调层数过多时 导致代码难以理解和阅读 这就是所谓的回调地狱。
function callbackHell() {
    setTimeout(() => {
        console.log('The first callback');
        setTimeout(() => {
            console.log("The second callback");
            setTimeout(() => {
                console.log("The thrid callback");
            }, 2000);
        }, 1000);
    }, 1500);
}
callbackHell();