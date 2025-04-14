import {creatQuantity, deleteQuantity, getQuantities,  updateQuantity} from '../controllers/quantity.controller.js';
import { Router } from 'express';
import { quantityPolicy } from '../policies/quantity.policy.js';

const quantityRouter = Router();
quantityRouter.post("/", quantityPolicy.create, creatQuantity);
quantityRouter.get("/", quantityPolicy.get, getQuantities);
quantityRouter.patch("/:id", quantityPolicy.update, updateQuantity);
quantityRouter.delete("/:id", quantityPolicy.deleteUser, deleteQuantity);
export default quantityRouter;