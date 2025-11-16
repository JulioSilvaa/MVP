import { PrismaClient } from '../../prisma/prisma-client-js/client'

declare global {
  var cachedPrisma: PrismaClient | undefined
}

export const db = global.cachedPrisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.cachedPrisma = db
}