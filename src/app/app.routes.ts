import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('@pages/home/home.component').then(comp => comp.HomeComponent) },
    { path: 'portfolio', loadComponent: () => import('@pages/portfolio/portfolio.component').then(comp => comp.PortfolioComponent) },
    { path: 'music', loadComponent: () => import('@pages/music/music.component').then(comp => comp.MusicComponent) },
    { path: 'photography', loadComponent: () => import('@pages/photography/photography.component').then(comp => comp.PhotographyComponent) },
    { path: 'more-proyects', loadComponent: () => import('@pages/proyects/proyects.component').then(comp => comp.ProyectsComponent) },
    { path:"**", loadComponent: () => import('@pages/not-found/not-found.component').then(comp => comp.NotFoundComponent) }
];
