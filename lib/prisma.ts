import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

declare global {
  var prisma: PrismaClient;
}

const prismaClientInit = (): PrismaClient => {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }

  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  return global.prisma;
};

export const prisma: PrismaClient = prismaClientInit();

export default prisma;
