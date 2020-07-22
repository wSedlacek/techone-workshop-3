import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connect = () => prisma.connect();
export const disconnect = () => prisma.disconnect();

export const seed = async () => {
  await prisma.apartment.create({
    data: {
      name: 'Some Cool Place',
      address: '123 Cool Ave',
      moveIn: new Date('2020-10-05T14:48:00.000Z'),
      rent: {
        create: {
          monthly: 500,
          pet: 0,
        },
      },
      fees: {
        create: { admin: 100, application: 100, pet: 200 },
      },
    },
  });

  await prisma.apartment.create({
    data: {
      name: 'Some Place',
      address: '231 Place Blvd',
      moveIn: new Date('2020-08-05T14:48:00.000Z'),
      rent: {
        create: {
          monthly: 900,
          pet: 50,
        },
      },
      fees: {
        create: { admin: 50, application: 200, pet: 125 },
      },
    },
  });
};

/**
 * Fails to clean, see https://github.com/prisma/prisma/issues/2057
 */
export const clean = async () => {
  await prisma.fees.deleteMany({ where: {} });
  await prisma.rent.deleteMany({ where: {} });
  await prisma.apartment.deleteMany({ where: {} });
};
