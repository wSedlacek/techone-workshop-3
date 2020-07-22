import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LetModule } from '@rx-angular/template';

import { MatCardModule } from '@angular/material/card';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule, LetModule, MatCardModule],
})
export class DetailsModule {}
