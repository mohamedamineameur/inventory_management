import request from 'supertest'
import app from '../../../index.js'
import { loginFixture } from '../fixtures/login.fixture.js'
import { enableDatabase } from '../setup.js'
import { userFixture } from '../fixtures/user.fixture.js'

describe('GET /api/users', () => {
  it('should return all users for authenticated user', async () => {
    await enableDatabase()
    const loginResponse = await loginFixture()
    const response = await request(app)
      .get('/api/users')
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
  })
})

describe('POST /api/users', () => {
  it('should create a new user for authenticated user', async () => {
    await enableDatabase()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .post('/api/users')
      .set('Cookie', loginResponse.cookie)
      .send({ username: 'newusertest', password: 'Password1234', role: 'user' })
      .expect(201)

    expect(response.body).toHaveProperty('user')
    expect(response.body.user).toHaveProperty('id')
    expect(response.body.user.username).toBe('newusertest')
    expect(response.body.user.role).toBe('user')
  })
})

describe('PATCH /api/users/:id', () => {
  it('should update an existing user for authenticated user', async () => {
    await enableDatabase()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .patch(`/api/users/${loginResponse.userId}`)
      .set('Cookie', loginResponse.cookie)
      .send({ username: 'updatedusertest' })
      .expect(200)

    expect(response.body).toHaveProperty('user')
    expect(response.body.user.username).toBe('updatedusertest')
  })
})

describe('DELETE /api/users/:id', () => {
  it('should delete an existing user for authenticated user', async () => {
    await enableDatabase()
    const loginResponse = await loginFixture()
    const user = await userFixture('usertodelete')

    const response = await request(app)
      .delete(`/api/users/${user.id}`)
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('User deleted successfully')
  })
})
describe('login', () => {
  it('should login an existing user', async () => {
    await enableDatabase()
    const user = await userFixture()
    const response = await request(app)
      .post('/api/users/login')
      .send({ username: user.username, password: user.password })
      .expect(200)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('Login successful')
  })
})

describe('login with invalid credentials', () => {
  it('should return an error for invalid credentials', async () => {
    await enableDatabase()
    const user = await userFixture()
    const response = await request(app)
      .post('/api/users/login')
      .send({ username: user.username, password: 'wrongpassword' })
      .expect(401)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('Invalid password')
  })
})

describe('login with non-existing user', () => {
  it('should return an error for non-existing user', async () => {
    await enableDatabase()
    const response = await request(app)
      .post('/api/users/login')
      .send({ username: 'nonexistinguser', password: 'Password1234' })
      .expect(404)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('User not found')
  })
})

describe('logout', () => {
  it('should logout an authenticated user', async () => {
    await enableDatabase()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .post('/api/users/logout')
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('Logout successful')
  })
})

describe('me', () => {
  it('should return the authenticated user', async () => {
    await enableDatabase()
    const loginResponse = await loginFixture()

    const response = await request(app)
      .get('/api/users/me')
      .set('Cookie', loginResponse.cookie)
      .expect(200)

    expect(response.body).toHaveProperty('user')
    expect(response.body.user).toHaveProperty('id')
  })
})
