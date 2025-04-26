import { Quantity, Item } from '../models/index.model.js'

export const createQuantity = async (req, res) => {
  const { itemId, quantity } = req.body

  try {
    const item = await Item.findByPk(itemId)
    if (!item) {
      return res.status(404).json({ message: 'Item not found' })
    }

    const newQuantity = await Quantity.create({
      itemId,
      quantity
    })

    return res.status(201).json({
      message: 'Quantity created successfully',
      quantity: newQuantity
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getQuantities = async (req, res) => {
  try {
    const quantities = await Quantity.findAll({
      include: [
        {
          model: Item,
          attributes: ['name']
        }
      ]
    })
    return res.status(200).json(quantities)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const updateQuantity = async (req, res) => {
  const { id } = req.params
  const { itemId, quantity } = req.body

  try {
    const quantityRecord = await Quantity.findByPk(id)
    if (!quantityRecord) {
      return res.status(404).json({ message: 'Quantity not found' })
    }

    if (itemId) {
      const item = await Item.findByPk(itemId)
      if (!item) {
        return res.status(404).json({ message: 'Item not found' })
      }
    }

    quantityRecord.itemId = itemId || quantityRecord.itemId
    quantityRecord.quantity = quantity || quantityRecord.quantity

    await quantityRecord.save()

    return res.status(200).json({
      message: 'Quantity updated successfully',
      quantity: quantityRecord
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
export const deleteQuantity = async (req, res) => {
  const { id } = req.params

  try {
    const quantityRecord = await Quantity.findByPk(id)
    if (!quantityRecord) {
      return res.status(404).json({ message: 'Quantity not found' })
    }

    await quantityRecord.destroy()

    return res.status(200).json({ message: 'Quantity deleted successfully' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
