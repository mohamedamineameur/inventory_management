import { Sale, User } from "../models/index.model.js";

export const createSale = async (req, res) => {
  const { itemId, quantity } = req.body;

  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newSale = await Sale.create({
      userId,
      itemId,
      quantity,
    });

    return res.status(201).json({
      message: "Sale created successfully",
      sale: newSale,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateSale = async (req, res) => {
  const { id } = req.params;
  const { itemId, quantity } = req.body;

  try {
    const sale = await Sale.findByPk(id);
    if (!sale) {
      return res.status(404).json({ message: "Sale not found" });
    }

    sale.itemId = itemId || sale.itemId;
    sale.quantity = quantity || sale.quantity;

    await sale.save();

    return res.status(200).json({
      message: "Sale updated successfully",
      sale,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const deleteSale = async (req, res) => {
  const { id } = req.params;

  try {
    const sale = await Sale.findByPk(id);
    if (!sale) {
      return res.status(404).json({ message: "Sale not found" });
    }

    await sale.destroy();

    return res.status(200).json({ message: "Sale deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
