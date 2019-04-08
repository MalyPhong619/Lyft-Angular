import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWelcomeComponent } from './main-welcome/main-welcome.component'

const appRoutes: Routes = [
  {
    path: '',
    component: MainWelcomeComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
