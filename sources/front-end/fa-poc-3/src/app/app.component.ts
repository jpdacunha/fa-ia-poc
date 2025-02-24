import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 120px);
      background-color: #f0f4f8;
      background-image: linear-gradient(30deg, #e5e5f7 12%, transparent 12.5%, transparent 87%, #e5e5f7 87.5%, #e5e5f7),
      linear-gradient(150deg, #e5e5f7 12%, transparent 12.5%, transparent 87%, #e5e5f7 87.5%, #e5e5f7),
      linear-gradient(30deg, #e5e5f7 12%, transparent 12.5%, transparent 87%, #e5e5f7 87.5%, #e5e5f7),
      linear-gradient(150deg, #e5e5f7 12%, transparent 12.5%, transparent 87%, #e5e5f7 87.5%, #e5e5f7),
      linear-gradient(60deg, #e5e5f7 25%, transparent 25.5%, transparent 75%, #e5e5f7 75%, #e5e5f7),
      linear-gradient(60deg, #e5e5f7 25%, transparent 25.5%, transparent 75%, #e5e5f7 75%, #e5e5f7);
      background-size: 20px 35px;
      background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
    }
  `]
})
export class AppComponent {
  title = 'FASTACCESS';
}