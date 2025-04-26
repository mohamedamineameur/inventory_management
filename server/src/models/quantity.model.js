import { database } from '../database/database.js'
import { DataTypes } from 'sequelize'
import { Item } from './item.model.js'

// Ensure the database connection is established
if (!database) {
  throw new Error(
    'Database connection is not initialized. Please check your database configuration.'
  )
}

export const Quantity = database.define(
  'Quantity',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemId: {
      type: DataTypes.UUID,
      references: {
        model: Item,
        key: 'id'
      },
      allowNull: false,
      unique: true
    }
  },
  {
    tableName: 'quantities',
    timestamps: false
  }
)
