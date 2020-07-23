import { PrismaClient } from '@prisma/client';

import axiosObservable from 'axios-observable';
import { delay, map } from 'rxjs/operators';

import * as faker from 'faker';

const prisma = new PrismaClient();

export const connect = () => prisma.connect();
export const disconnect = () => prisma.disconnect();

export const seed = async () => {
  for (let i = 0; i < 100; i += 1) {
    await prisma.apartment.create({
      data: {
        name: faker.company.companyName(),
        description: faker.lorem.paragraphs(faker.random.number(3)),
        photoURL: await axiosObservable
          .get('https://source.unsplash.com/featured/?apartments')
          .pipe(
            map((res) => `https://images.unsplash.com${res.request.path}`),
            delay(5000)
          )
          .toPromise(),
        address: faker.address.streetAddress(true),
        moveIn: new Date(faker.date.future(0)),
        rent: {
          create: {
            monthly: parseFloat(faker.finance.amount(500, 3000)),
            pet: parseFloat(faker.finance.amount(0, 500)),
          },
        },
        fees: {
          create: {
            admin: parseFloat(faker.finance.amount(0, 1000)),
            application: parseFloat(faker.finance.amount(0, 1000)),
            pet: parseFloat(faker.finance.amount(0, 1000)),
          },
        },
      },
    });
  }
};

/**
 * Fails to clean, see https://github.com/prisma/prisma/issues/2057
 */
export const clean = async () => {
  await prisma.fees.deleteMany({ where: {} });
  await prisma.rent.deleteMany({ where: {} });
  await prisma.apartment.deleteMany({ where: {} });
};
