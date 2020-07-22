import { Apartment, Fees, Rent } from '@prisma/client';

export type ApartmentListDTO = Pick<Apartment, 'id' | 'name'>[];
export type ApartmentDetailsDTO = Apartment & { rent: Rent; fees: Fees };
