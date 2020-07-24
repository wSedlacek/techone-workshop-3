import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  exports: [CommonModule, QuicklinkModule, MatButtonModule, MatCardModule],
})
export class SharedModule {}
