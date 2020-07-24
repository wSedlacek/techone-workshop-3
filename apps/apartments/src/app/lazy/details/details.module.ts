import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../shared';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [SharedModule, DetailsRoutingModule, MatTableModule],
})
export class DetailsModule {}
