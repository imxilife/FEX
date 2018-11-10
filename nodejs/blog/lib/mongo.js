


//用 Mongolass 这个模块操作 mongodb 进行增删改查
const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)



