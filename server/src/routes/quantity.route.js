import {createQuantity, deleteQuantity, getQuantities,  updateQuantity} from '../controllers/quantity.controller.js';
import { Router } from 'express';
import { quantityPolicy } from '../policies/quantity.policy.js';
import { quantityValidation } from '../validations/quantity.validation.js';

const quantityRouter = Router();
quantityRouter.post("/", quantityPolicy.create,quantityValidation, createQuantity);
quantityRouter.get("/", quantityPolicy.get, getQuantities);
quantityRouter.patch("/:id", quantityPolicy.update, updateQuantity);
quantityRouter.delete("/:id", quantityPolicy.deleteUser, deleteQuantity);
export default quantityRouter;