import {createItem, deleteItem, getItems, updateItem} from '../controllers/item.controller.js';
import { Router } from 'express';
import { itemPolicy } from '../policies/item.policy.js';
import { itemValidation } from '../validations/item.validation.js';

const itemRouter = Router();
itemRouter.post("/", itemPolicy.create,itemValidation, createItem);
itemRouter.get("/", itemPolicy.get, getItems);
itemRouter.patch("/:id", itemPolicy.update, updateItem);
itemRouter.delete("/:id", itemPolicy.deleteUser, deleteItem);
export default itemRouter;