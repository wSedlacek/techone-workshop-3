import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared';
import { NavComponent } from './components';

@NgModule({
  imports: [SharedModule, MatIconModule, MatToolbarModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class CoreModule {}
