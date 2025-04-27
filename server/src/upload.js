import fs from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'
import sharp from 'sharp'

const uploadDir = path.resolve('uploads')


// Création du dossier si inexistant
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

// Extensions autorisées
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']

/**
 * Sauvegarde un fichier image en local avec un nom unique basé sur UUID,
 * vérifie son extension et le compresse pour ne pas dépasser 64Ko.
 * @param {Express.Multer.File} file - Le fichier reçu via multer.
 * @returns {Promise<string>} - Le nom de fichier unique enregistré.
 */
export default async function storeFileAndReturnName(file) {
  if (!file || !file.buffer || !file.originalname) {
    throw new Error('Fichier invalide')
  }

  const ext = path.extname(file.originalname).toLowerCase()

  if (!allowedExtensions.includes(ext)) {
    throw new Error('Extension de fichier non autorisée')
  }

  const uniqueName = `${randomUUID()}${ext}`
  const filePath = path.join(uploadDir, uniqueName)

  // Compression : qualité dégressive jusqu’à atteindre <= 64 Ko
  let quality = 80
  let compressedBuffer = await sharp(file.buffer)
    .toFormat(ext === '.png' ? 'png' : 'jpeg', { quality })
    .toBuffer()

  while (compressedBuffer.length > 64 * 1024 && quality > 10) {
    quality -= 10
    compressedBuffer = await sharp(file.buffer)
      .toFormat(ext === '.png' ? 'png' : 'jpeg', { quality })
      .toBuffer()
  }

  fs.writeFileSync(filePath, compressedBuffer)
  
  return uniqueName
}
