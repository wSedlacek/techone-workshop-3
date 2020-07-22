import { Controller, Get, Param } from '@nestjs/common';

import { ApartmentDetailsDTO, ApartmentListDTO } from '@final/api-interfaces';

import { AppService } from './app.service';

@Controller('apartments')
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  public async getApartments(): Promise<ApartmentListDTO> {
    return this.service.getApartments();
  }

  @Get('/:id')
  public async getDetails(
    @Param('id') id: string
  ): Promise<ApartmentDetailsDTO> {
    return this.service.getDetails(id);
  }
}
