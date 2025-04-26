import { User } from './user.model.js'
import { Item } from './item.model.js'
import { Category } from './category.model.js'
import { Sale } from './sale.model.js'
import { SaleItem } from './sale-item.model.js'
import { Quantity } from './quantity.model.js'
import { database } from '../database/database.js'

// Ensure the database connection is established
if (!database) {
  throw new Error(
    'Database connection is not initialized. Please check your database configuration.'
  )
}

// Define associations between models
Category.hasMany(Item, {
  foreignKey: 'categoryId',
  sourceKey: 'id'
})
Item.belongsTo(Category, {
  foreignKey: 'categoryId',
  targetKey: 'id'
})
Item.hasMany(Quantity, {
  foreignKey: 'itemId',
  sourceKey: 'id'
})
Quantity.belongsTo(Item, {
  foreignKey: 'itemId',
  targetKey: 'id'
})
Sale.hasMany(SaleItem, {
  foreignKey: 'saleId',
  sourceKey: 'id'
})
SaleItem.belongsTo(Sale, {
  foreignKey: 'saleId',
  targetKey: 'id'
})
SaleItem.belongsTo(Item, {
  foreignKey: 'itemId',
  targetKey: 'id'
})
Item.hasMany(SaleItem, {
  foreignKey: 'itemId',
  sourceKey: 'id'
})
Sale.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
})
User.hasMany(Sale, {
  foreignKey: 'userId',
  sourceKey: 'id'
})
// Export all models for use in other parts of the application
export { User, Item, Category, Sale, SaleItem, Quantity }
