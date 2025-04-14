import {creatSale, getSales, updateSale, deleteSale} from '../controllers/sale.controller.js';
import { Router } from 'express';
import { salePolicy } from '../policies/sale.policy.js';

const saleRouter = Router();
saleRouter.post("/", salePolicy.create, creatSale);
saleRouter.get("/", salePolicy.get, getSales);
saleRouter.patch("/:id", salePolicy.update, updateSale);
saleRouter.delete("/:id", salePolicy.deleteUser, deleteSale);
export default saleRouter;