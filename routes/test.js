const router = require('koa-router')()
const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
router.prefix('/api')

router.get('/', async (ctx, next) => {
    const listData = await getList("wang")
    ctx.body = new SuccessModel(listData)

})


module.exports = router
