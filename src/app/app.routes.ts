import { Routes } from '@angular/router';
import { TimeComponent } from './page/time/time.component';
import { PersonalComponent } from './page/personal/personal.component';
import { DetailsComponent } from './page/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: TimeComponent
    },
    {
        path: 'personal',
        component: PersonalComponent
    },
    {
        path: 'details',
        component: DetailsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
