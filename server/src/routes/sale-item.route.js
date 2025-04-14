import {createSaleItem, deleteSaleItem, getSaleItems, updateSaleItem} from '../controllers/sale-item.controller.js';
import { Router } from 'express';
import { saleItemPolicy } from '../policies/sale-item.policy.js';
import { saleItemValidation } from '../validations/sale-item.validation.js';

const saleItemRouter = Router();
saleItemRouter.post("/", saleItemPolicy.create,saleItemValidation, createSaleItem);
saleItemRouter.get("/", saleItemPolicy.get, getSaleItems);
saleItemRouter.patch("/:id", saleItemPolicy.update, updateSaleItem);
saleItemRouter.delete("/:id", saleItemPolicy.deleteUser, deleteSaleItem);
export default saleItemRouter;