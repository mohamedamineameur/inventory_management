import { requireRole } from './policy.js'

export const categoryPolicy = {
  create: () => requireRole('management'),
  get: () => requireRole('all'),
  update: () => requireRole('management'),
  deleteUser: () => requireRole('management')
}
