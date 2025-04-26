import request from 'supertest'
import app from '../../../index.js'
import { saleFixture } from '../fixtures/sale.fixture.js'
import { loginFixture } from '../fixtures/login.fixture.js'
import { enableDatabase} from '../setup.js'

describe('GET /api/sales', () => {
    it('should return all sales for authenticated user', async () => {
        await enableDatabase()
        
        const loginResponse =  await loginFixture() 
        await saleFixture(loginResponse.userId) 
        const response = await request(app)
        .get('/api/sales')
        .set('Cookie', loginResponse.cookie)
        .expect(200)
        
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
    })
    }
)

describe('POST /api/sales', () => {
    it('should create a new sale for authenticated user', async () => {
        await enableDatabase()
        const loginResponse = await loginFixture()
    
        const response = await request(app)
        .post('/api/sales')
        .set('Cookie', loginResponse.cookie)
        .expect(201)
        expect(response.body).toHaveProperty('sale')
        expect(response.body.sale).toHaveProperty('id')
        expect(response.body.sale.userId).toBe(loginResponse.userId)
    }
    )
}
)
describe('PATCH /api/sales/:id', () => {
    it('should update an existing sale for authenticated user', async () => {
        await enableDatabase()
        
        const loginResponse = await loginFixture()
        const sale = await saleFixture(loginResponse.userId) 
        const response = await request(app)
        .patch(`/api/sales/${sale.id}`)
        .set('Cookie', loginResponse.cookie)
        .send({  })
        .expect(200)
    
        expect(response.body).toHaveProperty('sale')
    }
    )
}
)

describe('DELETE /api/sales/:id', () => {
    it('should delete an existing sale for authenticated user', async () => {
        await enableDatabase()
         
        const loginResponse = await loginFixture()
        const sale = await saleFixture(loginResponse.userId)
        const response = await request(app)
        .delete(`/api/sales/${sale.id}`)
        .set('Cookie', loginResponse.cookie)
        .expect(200)
    
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toBe('Sale deleted successfully')
    }
    )
}
)
