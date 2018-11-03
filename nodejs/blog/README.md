

models: 存放操作数据库的文件
public：存放静态文件、如样式、图片等
routes：存放路由文件
views: 存放模板文件
index.js 程序主文件
package.json：存放项目名、描述、作者、依赖等信息


对用模块的用处

express：web框架
express-session: session中间件
connect-mongo：将session存储于mongodb 结合express-session使用
connect-flash:  页面通知的中间件 基于session实现
ejs:  模板
express-formidable:  接收表单及文件上传的中间件
config-lite:  读取配置文件
marked: markdown解析
moment: 时间格式化
mongolass: mongodb驱动
objectid-to-timestamp: 根据objectId生成时间戳
sha1：sha1加密 用于密码加密
winston: 日志
express-winston: express的winston日志中间件


博客 整体设计

I、功能及路由设计如下

1、注册
    1.1 注册页: GET/sign up
    1.2 注册 (包含头像上传) : POST / sign up

2、登录
    2.1 登录页： GET/sign in    
    2.2 登录： POST / sign in

3、登出: GET / sign out

4、查看文章
    4.1 主页: GET/ posts
    4.2 个人主页：GET/post?author=xxx
    4.3 查看一篇文章(包含留言): GET / posts/:postId

5、发表文章
    5.1 发表文章页: GET / posts/create
    5.2 发表文章: POST / posts/create

6、修改文章
     6.1 修改文章页：GET /posts/:postId/edit
     6.2 修改文章：POST /posts/:postId/edit        

7、删除文章：GET /posts/:postId/remove

8、留言
     8.1 创建留言：POST /comments
     8.2 删除留言：GET /comments/:commentId/remove


II、会话（Session）
由于 HTTP 协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用某种机制来识别具体的用户，这个机制就是会话（Session）。
cookie 与 session 的区别
1、cookie 存储在浏览器（有大小限制），session 存储在服务端（没有大小限制）
2、通常 session 的实现是基于 cookie 的，session id 存储于 cookie 中
3、session 更安全，cookie 可以直接在浏览器查看甚至编辑

我们通过引入 express-session 中间件实现对会话的支持：
app.use(session(options))

session 中间件会在 req 上添加 session 对象，即 req.session 初始值为 {}，当我们登录后设置 req.session.user = 用户信息，返回浏览器的头信息中会带上 set-cookie 将 session id 写到浏览器 cookie 中，那么该用户下次请求时，通过带上来的 cookie 中的 session id 我们就可以查找到该用户，并将用户信息保存到 req.session.user。

III、页面通知（page notify）
需求: 
我们还需要这样一个功能：当我们操作成功时需要显示一个成功的通知，如登录成功跳转到主页时，需要显示一个 登陆成功 的通知；当我们操作失败时需要显示一个失败的通知，如注册时用户名被占用了，需要显示一个 用户名已占用 的通知。通知只显示一次，刷新后消失，我们可以通过 connect-flash 中间件实现这个功能。

实现：connect-flash 是基于 session 实现的，它的原理很简单：设置初始值 req.session.flash={}，通过 req.flash(name, value) 设置这个对象下的字段和值，通过 req.flash(name) 获取这个对象下的值，同时删除这个字段，实现了只显示一次刷新后消失的功能。

express-session、connect-mongo 和 connect-flash 的区别与联系
1、express-session: 会话（session）支持中间件
2、connect-mongo: 将 session 存储于 mongodb，需结合 express-session 使用，我们也可以将 session 存储于 redis，如 connect-redis
3、connect-flash: 基于 session 实现的用于通知功能的中间件，需结合 express-session 使用

IV、权限控制
需求:
不管是论坛还是博客网站，我们没有登录的话只能浏览，登陆后才能发帖或写文章，即使登录了你也不能修改或删除其他人的文章，这就是权限控制。

实现:
我们也来给博客添加权限控制，如何实现页面的权限控制呢？我们可以把用户状态的检查封装成一个中间件，在每个需要权限控制的路由加载该中间件，即可实现页面的权限控制。在 myblog 下新建 middlewares 目录，在该目录下新建 check.js，添加如下代码：

代码:
middlewares/check.js

module.exports = {
  checkLogin: function checkLogin (req, res, next) {
    if (!req.session.user) {
      req.flash('error', '未登录')
      return res.redirect('/signin')
    }
    next()
  },

  checkNotLogin: function checkNotLogin (req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录')
      return res.redirect('back')// 返回之前的页面
    }
    next()
  }
}

1、checkLogin: 当用户信息（req.session.user）不存在，即认为用户没有登录，则跳转到登录页，同时显示 未登录 的通知，用于需要用户登录才能操作的页面
2、checkNotLogin: 当用户信息（req.session.user）存在，即认为用户已经登录，则跳转到之前的页面，同时显示 已登录 的通知，如已登录用户就禁止访问登  录、注册页面

最终创建一下路由

routes/index.js
module.exports = function(app) {
  app.get('/' , function(req,res){
    res.redirect('/posts');
  })

app.use('/signup',require('./signup'));
app.use('/signin',require('./signin'));
app.use('/signout',require('./signout'));
app.use('/posts',require('./posts'));
app.use('/comment','./comments');
}





