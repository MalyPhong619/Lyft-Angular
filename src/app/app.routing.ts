import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWelcomeComponent } from './main-welcome/main-welcome.component';
import { LogInComponent } from './log-in/log-in.component';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainWelcomeComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'driver',
    component: DriverComponent
  },
  {
    path: 'rider',
    component: RiderComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
