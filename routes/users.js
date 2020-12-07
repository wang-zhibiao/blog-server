const router = require('koa-router')()
const { login, logon } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.prefix('/api/user')

//登录
router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  const data = await login(username, password)
  if (data.username) {
    // 设置 session
    ctx.session.username = data.username
    ctx.session.realname = data.realname

    ctx.body = new SuccessModel()
    return
  }
  ctx.body = new ErrorModel({ username, password }, '登录失败')
})
//注册
router.post('/logon', async function (ctx, next) {
  const { username, password, realname } = ctx.request.body
  const data = await logon(username, password, realname)
  if (data.username) {
    // 设置 session
    ctx.session.username = data.username
    ctx.session.realname = data.realname

    ctx.body = new SuccessModel()
    return
  }
  ctx.body = new ErrorModel('登录失败')
})

module.exports = router