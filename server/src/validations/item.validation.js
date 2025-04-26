import { isUUID } from './isUUID.js'
import { isFloat } from './isFloat.js'

export const itemValidation = async (req, res, next) => {
  const { name, description, price, categoryId } = req.body
  if (!name) {
    return res.status(400).json({ message: 'Name is required' })
  }
  if (!description) {
    return res.status(400).json({ message: 'Description is required' })
  }
  if (!price) {
    return res.status(400).json({ message: 'Price is required' })
  }
  if (!isFloat(price)) {
    return res.status(400).json({ message: 'Price must be a valid number' })
  }
  if (!categoryId) {
    return res.status(400).json({ message: 'Category ID is required' })
  }
  if (!isUUID(categoryId)) {
    return res.status(400).json({ message: 'Category ID must be a valid UUID' })
  }
  next()
}
