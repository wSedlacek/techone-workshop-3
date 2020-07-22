import { ApartmentDetailsDTO, ApartmentListDTO } from '@final/api-interfaces';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  public async getApartments(): Promise<ApartmentListDTO> {
    return this.prisma.apartment.findMany({ select: { id: true, name: true } });
  }

  public async getDetails(id: string): Promise<ApartmentDetailsDTO> {
    return this.prisma.apartment.findOne({
      where: { id },
      include: { fees: true, rent: true },
    });
  }
}
