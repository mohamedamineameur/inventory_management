import request from 'supertest'
import app from '../../../index.js'
import { createCategoryFixture } from '../fixtures/category.fixture.js'
import { loginFixture } from '../fixtures/login.fixture.js'
import { enableDatabase } from '../setup.js'

describe('GET /api/categories', () => {
  it('should return all categories for authenticated user', async () => {
    await enableDatabase()
    await createCategoryFixture()
    const loginResponse = await loginFixture()
    const response = await request(app)
      .get('/api/categories')
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
  })
})

describe('POST /api/categories', () => {
  it('should create a new category for authenticated user', async () => {
    await enableDatabase()

    const loginResponse = await loginFixture()

    const response = await request(app)
      .post('/api/categories')
      .set('Cookie', loginResponse.cookie)
      .send({ name: 'New Category' })
      .expect(201)

    expect(response.body).toHaveProperty('category')
    expect(response.body.category).toHaveProperty('id')
    expect(response.body.category.name).toBe('New Category')
  })
})
describe('PUT /api/categories/:id', () => {
  it('should update an existing category for authenticated user', async () => {
    await enableDatabase()
    const category = await createCategoryFixture()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .patch(`/api/categories/${category.id}`)
      .set('Cookie', loginResponse.cookie)
      .send({ name: 'Updated Category' })
      .expect(200)

    expect(response.body).toHaveProperty('category')
    expect(response.body.category.name).toBe('Updated Category')
  })
})
describe('DELETE /api/categories/:id', () => {
  it('should delete an existing category for authenticated user', async () => {
    await enableDatabase()
    const category = await createCategoryFixture()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .delete(`/api/categories/${category.id}`)
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('Category deleted successfully')
  })
})
