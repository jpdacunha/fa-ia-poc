import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { LoginComponent } from './app/components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-login></app-login>
    <app-footer></app-footer>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
