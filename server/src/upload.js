import fs from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'

const uploadDir = './uploads'

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

/**
 * Sauvegarde un fichier en local avec un nom unique basé sur UUID.
 * @param {Express.Multer.File} file - Le fichier reçu via multer.
 * @returns {string} - Le nom de fichier unique enregistré.
 */
export default function storeFileAndReturnName(file) {
  if (!file || !file.buffer || !file.originalname) {
    throw new Error('Fichier invalide')
  }

  const ext = path.extname(file.originalname)
  const uniqueName = `${randomUUID()}${ext}`
  const filePath = path.join(uploadDir, uniqueName)

  fs.writeFileSync(filePath, file.buffer)

  return uniqueName
}
