import { requireRole } from './policy.js'

export const quantityPolicy = {
  create: () => requireRole('management'),
  get: () => requireRole('all'),
  update: () => requireRole('management'),
  deleteUser: () => requireRole('management')
}
