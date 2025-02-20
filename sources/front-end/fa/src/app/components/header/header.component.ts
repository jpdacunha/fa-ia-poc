import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    // À implémenter avec la logique d'authentification
    return false;
  }

  logout(): void {
    // À implémenter avec la logique de déconnexion
    this.router.navigate(['/login']);
  }
}