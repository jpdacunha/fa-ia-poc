import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

 constructor(private router: Router) {}
  onLinkContactClick(event: Event): void {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    // On redirige simplement vers la page de contact
    this.router.navigate(['/contact']);
  }
}