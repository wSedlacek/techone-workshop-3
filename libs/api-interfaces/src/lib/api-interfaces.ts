import type { Apartment, Fees, Rent } from '@prisma/client';

export type ApartmentItemDTO = Pick<Apartment, 'id' | 'name'>;
export type ApartmentListDTO = ApartmentItemDTO[];
export type ApartmentDetailsDTO = Apartment & { rent: Rent; fees: Fees };
