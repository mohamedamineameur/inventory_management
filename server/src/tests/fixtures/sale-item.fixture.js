import { SaleItem } from '../../models/index.model.js'
import { itemFixture } from './item.fixture.js'
import { saleFixture } from './sale.fixture.js'

export const saleItemFixture = async userId => {
  const item = await itemFixture()
  const sale = await saleFixture(userId)
  const saleItem = {
    quantity: 10,
    itemId: item.id,
    saleId: sale.id
  }
  const newSaleItem = await SaleItem.create({
    ...saleItem
  })
  return {
    id: newSaleItem.id,
    quantity: newSaleItem.quantity,
    itemId: newSaleItem.itemId,
    saleId: newSaleItem.saleId
  }
}
