// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// export const prisma = new PrismaClient({
//     adapter,
// });

import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['error', 'warn'],
    });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;
