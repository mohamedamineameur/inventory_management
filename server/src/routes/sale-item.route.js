import {creatSaleItem, deleteSaleItem, getSaleItems, updateSaleItem} from '../controllers/sale-item.controller.js';
import { Router } from 'express';
import { saleItemPolicy } from '../policies/sale-item.policy.js';

const saleItemRouter = Router();
saleItemRouter.post("/", saleItemPolicy.create, creatSaleItem);
saleItemRouter.get("/", saleItemPolicy.get, getSaleItems);
saleItemRouter.patch("/:id", saleItemPolicy.update, updateSaleItem);
saleItemRouter.delete("/:id", saleItemPolicy.deleteUser, deleteSaleItem);
export default saleItemRouter;