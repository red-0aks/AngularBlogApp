import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';

//define y alberga las rutas
export const AppRoutes: Routes = [
    { path: '', component: LoginComponent }
];

//exporta las rutas a traves de ModuleWithProviders
export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);