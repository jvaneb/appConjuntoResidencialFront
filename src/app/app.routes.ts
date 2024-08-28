import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';

export const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./dashboard/dashboard.component').then( m => m.DashboardComponent)
            }
        ]
    }
];

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes, withComponentInputBinding())
    ]
};