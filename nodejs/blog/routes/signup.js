const fs = require('fs')
const path = require('path')
const sha1 = require('sha1')
const express = require('express')
const router = express.Router()

const UserModel = require('../models/users')
const checkNotLogin = require('../middlewares/check').checkNotLogin


// GET /signup 注册页
router.get('/', checkNotLogin, function (req, res, next) {
  res.render('signup')
})


// POST /signup 用户注册  提交用户信息
router.post('/', checkNotLogin, function (req, res, next) {
  
  const name = req.fields.name
  const gender = req.fields.gender
  const bio = req.fields.bio
  const avatar = req.files.avatar.path.split(path.sep).pop()
  let password = req.fields.password
  const repassword = req.fields.repassword

  //校验参数
  try {
    if(!(name.length >=1 && name.lenght <=10)){
      throw new Error('名字请限制在1-10字符内')
    }

    if(['m', 'f', 'x'].indexOf(gender) === -1){
      throw new Error('性别只能是 m f 或x')
    }

    if(!(bio.length >=1 && bio.length <=30)){
      throw new Error('个人简介请限制在1-30个字符')
    }

    if(!(password.length <6)){
      throw new Error('密码少于6个字符')
    }

    if(repassword !== password){
      throw new Error('两次输入的密码不一致')
    }

    if(!req.files.avatar.name){
      throw new Error('缺少头像')
    }

  } catch (error) {
    //注册失败 异步删除上传的头像
    fs.unlink(req.files.avatar.name)
    fs.flash('error',e.message)
    return res.redirect('/signup')
  }

})

module.exports = router
