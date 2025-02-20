import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      padding: 64px 0;
      min-height: calc(100vh - 128px);
    }
  `]
})
export class AppComponent {
  title = 'Fast Access';
}