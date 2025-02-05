import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('@pages/home/home.component').then(comp => comp.HomeComponent) },
    { path: 'portfolio', loadComponent: () => import('@pages/portfolio/portfolio.component').then(comp => comp.PortfolioComponent) },
    { path:"**", loadComponent: () => import('@pages/not-found/not-found.component').then(comp => comp.NotFoundComponent) }
];
