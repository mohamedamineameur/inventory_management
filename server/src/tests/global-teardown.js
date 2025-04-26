import { database } from '../database/database.js'

export default async () => {
  await database.close()
  console.log('✅ Database connection closed.')
}
