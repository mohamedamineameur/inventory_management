import { Item } from '../../models/index.model.js'
import { createCategoryFixture } from '../fixtures/category.fixture.js'

export const itemFixture = async () => {
  const categoryFixture = await createCategoryFixture()
  const item = {
    name: 'testItem',
    description: 'testDescription',
    price: 10.0,
    categoryId: categoryFixture.id,
    pictureURL: 'testPictureURL'
  }
  const newItem = await Item.create({
    ...item
  })
  return {
    id: newItem.id,
    name: newItem.name,
    description: newItem.description,
    price: newItem.price,
    categoryId: newItem.categoryId
  }
}
