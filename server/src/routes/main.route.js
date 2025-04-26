import saleItemRouter from './sale-item.route.js'
import saleRouter from './sale.route.js'
import itemRouter from './item.route.js'
import userRouter from './user.route.js'
import quantityRouter from './quantity.route.js'
import categoryRouter from './category.route.js'
import { Router } from 'express'

const mainRouter = Router()
mainRouter.use('/users', userRouter)
mainRouter.use('/categories', categoryRouter)
mainRouter.use('/quantities', quantityRouter)
mainRouter.use('/items', itemRouter)
mainRouter.use('/sales', saleRouter)
mainRouter.use('/sale-items', saleItemRouter)

export default mainRouter
