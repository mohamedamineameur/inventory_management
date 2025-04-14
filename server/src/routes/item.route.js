import {creatItem, deleteItem, getItems, updateItem} from '../controllers/item.controller.js';
import { Router } from 'express';
import { itemPolicy } from '../policies/item.policy.js';

const itemRouter = Router();
itemRouter.post("/", itemPolicy.create, creatItem);
itemRouter.get("/", itemPolicy.get, getItems);
itemRouter.patch("/:id", itemPolicy.update, updateItem);
itemRouter.delete("/:id", itemPolicy.deleteUser, deleteItem);
export default itemRouter;