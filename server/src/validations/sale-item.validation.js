import { isUUID } from './isUUID.js'
import { isInteger } from './isInteger.js'

export const saleItemValidation = async (req, res, next) => {
  const { saleId, itemId, quantity } = req.body
  if (!saleId) {
    return res.status(400).json({ message: 'Sale ID is required' })
  }
  if (!isUUID(saleId)) {
    return res.status(400).json({ message: 'Sale ID must be a valid UUID' })
  }
  if (!itemId) {
    return res.status(400).json({ message: 'Item ID is required' })
  }
  if (!isUUID(itemId)) {
    return res.status(400).json({ message: 'Item ID must be a valid UUID' })
  }
  if (!quantity) {
    return res.status(400).json({ message: 'Quantity is required' })
  }
  if (!isInteger(quantity)) {
    return res.status(400).json({ message: 'Quantity must be a valid integer' })
  }

  next()
}
