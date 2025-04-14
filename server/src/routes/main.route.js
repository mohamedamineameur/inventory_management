import saleItemRouter from "./sale-item.route";
import saleRouter from "./sale.route";
import itemRouter from "./item.route";
import userRouter from "./user.route";
import quantityRouter from "./quantity.route";
import categoryRouter from "./category.route";
import { Router } from "express";

const mainRouter = Router();
mainRouter.use("/users", userRouter);
mainRouter.use("/categories", categoryRouter);
mainRouter.use("/quantities", quantityRouter);
mainRouter.use("/items", itemRouter);
mainRouter.use("/sales", saleRouter);
mainRouter.use("/sale-items", saleItemRouter);

export default mainRouter;