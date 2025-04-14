import {Item, Category} from "../models/index.model.js";
import storeFileAndReturnName from "../upload.js";

export const createItem = async (req, res) => {
    const { name, description, price, categoryId, file } = req.body;
    if (file) {
        const pictureURL = await storeFileAndReturnName(file);
        req.body.pictureURL = pictureURL;
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }

    try {
        const newItem = await Item.create({
            name,
            description,
            price,
            categoryId,
            pictureURL
        });

        return res.status(201).json({
            message: "Item created successfully",
            item: newItem
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getItems = async (req, res) => {
    try {
        const items = await Item.findAll({
            include: [{
                model: Category,
                attributes: ['name']
            }]
        });
        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
export const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, categoryId, file } = req.body;

    try {
        const item = await Item.findByPk(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        if (categoryId) {
            const category = await Category.findByPk(categoryId);
            if (!category) {
                return res.status(404).json({ message: "Category not found" });
            }
        }
        if (file) {
            const pictureURL = await storeFileAndReturnName(file);
            req.body.pictureURL = pictureURL;
        }

        item.name = name || item.name;
        item.description = description || item.description;
        item.price = price || item.price;
        item.categoryId = categoryId || item.categoryId;
        item.pictureURL = req.body.pictureURL || item.pictureURL;

        await item.save();

        return res.status(200).json({
            message: "Item updated successfully",
            item
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await Item.findByPk(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        await item.destroy();

        return res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

