import { Component } from '@angular/core';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent {
  clientId: string = '';
  clientName: string = '';
  clientFirstName: string = '';
  clientBirthDate: string = '';

  searchById() {
    console.log('Recherche par identifiant:', this.clientId);
  }

  searchByMultiCriteria() {
    console.log('Recherche multi-critères:', {
      nom: this.clientName,
      prenom: this.clientFirstName,
      dateNaissance: this.clientBirthDate
    });
  }
}