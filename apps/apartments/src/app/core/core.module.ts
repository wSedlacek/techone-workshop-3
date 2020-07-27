import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared';
import { NavComponent } from './components';

@NgModule({
  imports: [
    SharedModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
  ],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class CoreModule {}
