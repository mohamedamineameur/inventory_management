import { isUUID } from "./isUUID.js";

export const saleValidation = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }
  if (!isUUID(userId)) {
    return res.status(400).json({ message: "User ID must be a valid UUID" });
  }

  next();
};
