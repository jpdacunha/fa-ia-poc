import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientSearchComponent } from './components/client-search/client-search.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'client-search', component: ClientSearchComponent },
  { path: 'contact', component: ContactComponent },
];