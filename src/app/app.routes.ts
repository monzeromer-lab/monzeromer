import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component'
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contact-me',
        component: ContactMeComponent,
        // loadComponent: () => ContactMeComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        // loadComponent: () => ProjectsComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
