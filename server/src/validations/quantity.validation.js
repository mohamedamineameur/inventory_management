import { isUUID } from "./isUUID.js";
import { isInteger } from "./isInteger.js";

export const quantityValidation = async (req, res, next) => {
  const { quantity, itemId } = req.body;

  if (!quantity) {
    return res.status(400).json({ message: "Quantity is required" });
  }
  if (!isInteger(quantity)) {
    return res
      .status(400)
      .json({ message: "Quantity must be a valid integer" });
  }
  if (!itemId) {
    return res.status(400).json({ message: "Item ID is required" });
  }
  if (!isUUID(itemId)) {
    return res.status(400).json({ message: "Item ID must be a valid UUID" });
  }
  next();
};
