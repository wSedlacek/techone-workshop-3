import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: ':id',
    loadChildren: () =>
      import('./lazy/details/details.module').then((m) => m.DetailsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./lazy/list/list.module').then((m) => m.ListModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
