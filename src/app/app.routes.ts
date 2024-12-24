import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './private/private-layout/private-layout.component';

export const routes: Routes = [
  //public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./public/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'references',
        loadChildren: () =>
          import('./public/references/references.module').then(
            (m) => m.ReferencesModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./public/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./public/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
    ],
  },
  //private routes
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./private/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./private/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'new-vehicle',
        loadChildren: () =>
          import('./private/new-vehicle/new-vehicle.module').then(
            (m) => m.NewVehicleModule
          ),
      },
      {
        path: 'salaries',
        loadChildren: () =>
          import('./private/salaries/salaries.module').then(
            (m) => m.SalariesModule
          ),
      },
    ],
  },
];
