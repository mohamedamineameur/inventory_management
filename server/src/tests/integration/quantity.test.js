import request from 'supertest'
import app from '../../../index.js'
import { quantityFixture } from '../fixtures/quantity.fixture.js'
import { itemFixture } from '../fixtures/item.fixture.js'
import { loginFixture } from '../fixtures/login.fixture.js'
import { enableDatabase } from '../setup.js'

describe('GET /api/quantities', () => {
  it('should return all quantities for authenticated user', async () => {
    await enableDatabase()
    await quantityFixture()
    const loginResponse = await loginFixture()
    const response = await request(app)
      .get('/api/quantities')
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
  })
})

describe('POST /api/quantities', () => {
  it('should create a new quantity for authenticated user', async () => {
    await enableDatabase()
    const item = await itemFixture()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .post('/api/quantities')
      .set('Cookie', loginResponse.cookie)
      .send({ quantity: 10, itemId: item.id })
      .expect(201)

    expect(response.body).toHaveProperty('quantity')
    expect(response.body.quantity).toHaveProperty('id')
    expect(response.body.quantity.quantity).toBe(10)
    expect(response.body.quantity.itemId).toBe(item.id)
  })
})

describe('PATCH /api/quantities/:id', () => {
  it('should update an existing quantity for authenticated user', async () => {
    await enableDatabase()
    const quantity = await quantityFixture()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .patch(`/api/quantities/${quantity.id}`)
      .set('Cookie', loginResponse.cookie)
      .send({ quantity: 20 })
      .expect(200)

    expect(response.body).toHaveProperty('quantity')
    expect(response.body.quantity.quantity).toBe(20)
  })
})
describe('DELETE /api/quantities/:id', () => {
  it('should delete an existing quantity for authenticated user', async () => {
    await enableDatabase()
    const quantity = await quantityFixture()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .delete(`/api/quantities/${quantity.id}`)
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('Quantity deleted successfully')
  })
})
