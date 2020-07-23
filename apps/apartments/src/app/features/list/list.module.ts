import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, ListRoutingModule, MatCardModule, MatButtonModule],
  declarations: [ListComponent],
})
export class ListModule {}
