const express = require('express');
const path = require('path');
const app = express();

 const indexRouter = require('./routes/index');
 //const userRouter = require('./routes/user'); 

/* app.set('views',path.join('__dirname','views')); //设置模板文件夹目录名
app.set('view engine','ejs'); //设置模板引擎 */

 //app.use('/',indexRouter);  //通过use方法挂载不同路径处理方式
/* app.use('/user',userRouter); */

/* app.listen(3000); */

app.get('/',function (req,res) {
  res.send('hello');
});

app.listen(3000);