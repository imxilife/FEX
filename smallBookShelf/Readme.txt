项目名: 微信小书架


需求分析

功能模块拆分

登录授权
已购书籍
浏览书籍
评论模块
个人信息
书籍详情
书籍列表
推送消息


数据库设计
users
books
comments
orders
access

流程图


小程序端 代码目录结构 

config 全局配置信息目录
images 图片资源目录
pages  小程序所有的页面目录
  |
    --books   书籍列表UI+逻辑 目录
    --comment 书籍评论UI+逻辑 目录
    --detail  书籍详情UI+逻辑 目录
    --my      个人信息UI+逻辑 目录
    --mybook  个人已购书籍UI+逻辑 目录
utils 工具类目录
app.js 小程序App逻辑
app.json 小程序App配置
app.wxss
project.config.json
README.md    


服务端代码目录结构
 
 bin -- 开启https的服务
 conf -- 小程序的相关配置和数据库配置
 controllers -- 不同路由对应控制器的函数
 dao -- 数据库实体目录
 middleware 中间件目录
 node_modules -- 使用的第三方库
 routes --路由
 util --工具类
 app-token.js
 app.js --整个项目的入口
 package.json --配置和npm包引用详情


