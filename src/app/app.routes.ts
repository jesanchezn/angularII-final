import { Routes } from '@angular/router';
import { UsersList } from './features/users/components/users-list/users-list';
import { UserCreate } from './features/users/components/user-create/user-create';

export const routes: Routes = [
    { path:'', redirectTo: 'users', pathMatch: 'full' },
    { path:'users', component: UsersList},
    { path: 'users/create', component: UserCreate },
    { path:'**', redirectTo: 'users' }
];