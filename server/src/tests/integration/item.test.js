import request from 'supertest'
import app from '../../../index.js'
import { createCategoryFixture } from '../fixtures/category.fixture.js'
import { itemFixture } from '../fixtures/item.fixture.js'
import { loginFixture } from '../fixtures/login.fixture.js'
import { enableDatabase } from '../setup.js'

describe('GET /api/items', () => {
  it('should return all items for authenticated user', async () => {
    await enableDatabase()
    await itemFixture()
    const loginResponse = await loginFixture()
    const response = await request(app)
      .get('/api/items')
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
  })
})

describe('POST /api/items', () => {
  it('should create a new item for authenticated user', async () => {
    await enableDatabase()
    const category = await createCategoryFixture()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .post('/api/items')
      .set('Cookie', loginResponse.cookie)
      .send({
        name: 'New Item',
        description: 'Item Description',
        price: 10.0,
        categoryId: category.id
      })
      .expect(201)

    expect(response.body).toHaveProperty('item')
    expect(response.body.item).toHaveProperty('id')
    expect(response.body.item.name).toBe('New Item')
  })
})
describe('PATCH /api/items/:id', () => {
  it('should update an existing item for authenticated user', async () => {
    await enableDatabase()
    const item = await itemFixture()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .patch(`/api/items/${item.id}`)
      .set('Cookie', loginResponse.cookie)
      .send({ name: 'Updated Item' })
      .expect(200)

    expect(response.body).toHaveProperty('item')
    expect(response.body.item.name).toBe('Updated Item')
  })
})

describe('DELETE /api/items/:id', () => {
  it('should delete an existing item for authenticated user', async () => {
    await enableDatabase()
    const item = await itemFixture()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .delete(`/api/items/${item.id}`)
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('Item deleted successfully')
  })
})
