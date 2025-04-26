import request from 'supertest'
import app from '../../../index.js'
import { saleFixture } from '../fixtures/sale.fixture.js'
import { loginFixture } from '../fixtures/login.fixture.js'
import { enableDatabase} from '../setup.js'
import { saleItemFixture } from '../fixtures/sale-item.fixture.js'
import { itemFixture } from '../fixtures/item.fixture.js'

describe('GET /api/sale-items', () => {
    it('should return all sale items for authenticated user', async () => {
        await enableDatabase()        
        const loginResponse =  await loginFixture() 
        await saleItemFixture(loginResponse.userId) 
        const response = await request(app)
        .get('/api/sale-items')
        .set('Cookie', loginResponse.cookie)
        .expect(200) 
        
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
    })
    }
)

describe('POST /api/sale-items', () => {
    it('should create a new sale item for authenticated user', async () => {
        await enableDatabase()
        const loginResponse = await loginFixture()
        const sale = await saleFixture(loginResponse.userId)
        const item = await itemFixture(loginResponse.userId)
    
        const response = await request(app)
        .post('/api/sale-items')
        .set('Cookie', loginResponse.cookie)
        .send({ saleId: sale.id, itemId: item.id, quantity: 1 })
        .expect(201)
        expect(response.body).toHaveProperty('saleItem')
        expect(response.body.saleItem).toHaveProperty('id')
        expect(response.body.saleItem.itemId).toBe(item.id)
        expect(response.body.saleItem.saleId).toBe(sale.id)
        expect(response.body.saleItem.quantity).toBe(1)
    }
    )
}
)
describe('PATCH /api/sale-items/:id', () => {
    it('should update an existing sale item for authenticated user', async () => {
        await enableDatabase()        
        const loginResponse = await loginFixture()
        const saleItem = await saleItemFixture(loginResponse.userId) 
        const response = await request(app)
        .patch(`/api/sale-items/${saleItem.id}`)
        .set('Cookie', loginResponse.cookie)
        .send({  })
        .expect(200)
    
        expect(response.body).toHaveProperty('saleItem')
    }
    )
}
)
describe('DELETE /api/sale-items/:id', () => {
    it('should delete an existing sale item for authenticated user', async () => {
        await enableDatabase()
        const loginResponse = await loginFixture()
        const saleItem = await saleItemFixture(loginResponse.userId) 
        const response = await request(app)
        .delete(`/api/sale-items/${saleItem.id}`)
        .set('Cookie', loginResponse.cookie)
        .expect(200)
    
        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toBe('Sale item deleted successfully')
    }
    )
}
)
    