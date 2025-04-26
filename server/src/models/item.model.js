import { database } from '../database/database.js'
import { DataTypes } from 'sequelize'
import { Category } from './category.model.js'

// Ensure the database connection is established
if (!database) {
  throw new Error(
    'Database connection is not initialized. Please check your database configuration.'
  )
}

export const Item = database.define(
  'Item',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.UUID,
      references: {
        model: Category,
        key: 'id'
      }
    },
    pictureURL: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'items',
    timestamps: false
  }
)
