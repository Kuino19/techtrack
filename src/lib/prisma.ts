import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'

// Use fetch instead of ws for Turbopack compatibility

const prismaClientSingleton = () => {
  const connectionString = `${process.env.DATABASE_URL}`
  const pool = new Pool({ connectionString })
  // @ts-expect-error PrismaNeon expects a slightly older type definition of Pool from neondatabase/serverless
  const adapter = new PrismaNeon(pool)
  return new PrismaClient({ adapter })
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
