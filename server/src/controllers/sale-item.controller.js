import { SaleItem, Sale, Item } from "../models/index.model.js";

export const createSaleItem = async (req, res) => {
  const { saleId, itemId, quantity } = req.body;

  try {
    const sale = await Sale.findByPk(saleId);
    if (!sale) {
      return res.status(404).json({ message: "Sale not found" });
    }

    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const newSaleItem = await SaleItem.create({
      saleId,
      itemId,
      quantity,
    });

    return res.status(201).json({
      message: "Sale item created successfully",
      saleItem: newSaleItem,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getSaleItems = async (req, res) => {
  try {
    const saleItems = await SaleItem.findAll({
      include: [
        {
          model: Sale,
          attributes: ["id"],
        },
        {
          model: Item,
          attributes: ["name"],
        },
      ],
    });
    return res.status(200).json(saleItems);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateSaleItem = async (req, res) => {
  const { id } = req.params;
  const { saleId, itemId, quantity } = req.body;

  try {
    const saleItem = await SaleItem.findByPk(id);
    if (!saleItem) {
      return res.status(404).json({ message: "Sale item not found" });
    }

    if (saleId) {
      const sale = await Sale.findByPk(saleId);
      if (!sale) {
        return res.status(404).json({ message: "Sale not found" });
      }
    }

    if (itemId) {
      const item = await Item.findByPk(itemId);
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
    }

    saleItem.saleId = saleId || saleItem.saleId;
    saleItem.itemId = itemId || saleItem.itemId;
    saleItem.quantity = quantity || saleItem.quantity;

    await saleItem.save();

    return res.status(200).json({
      message: "Sale item updated successfully",
      saleItem,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const deleteSaleItem = async (req, res) => {
  const { id } = req.params;

  try {
    const saleItem = await SaleItem.findByPk(id);
    if (!saleItem) {
      return res.status(404).json({ message: "Sale item not found" });
    }

    await saleItem.destroy();

    return res.status(200).json({ message: "Sale item deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
