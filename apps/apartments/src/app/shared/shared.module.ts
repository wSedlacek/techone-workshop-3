import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    QuicklinkModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class SharedModule {}
