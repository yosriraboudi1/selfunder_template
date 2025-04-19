import { Component } from '@angular/core';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrl: './reclamation-list.component.scss'
})
export class ReclamationListComponent {
  items = [
    { id: 1, name: 'Élément 1', description: 'Description de l\'élément 1' },
    { id: 2, name: 'Élément 2', description: 'Description de l\'élément 2' },
    { id: 3, name: 'Élément 3', description: 'Description de l\'élément 3' },
    { id: 4, name: 'Élément 4', description: 'Description de l\'élément 4' },
  ];

  // Variables pour la recherche et la liste filtrée
  searchTerm: string = '';
  filteredList: any[] = [];

  ngOnInit(): void {
    // Initialiser la liste filtrée avec toutes les données
    this.filteredList = this.items;
  }

  // Filtrer la liste en fonction du terme de recherche
  filterList(): void {
    this.filteredList = this.items.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Méthode pour éditer un élément
  editItem(id: number): void {
    alert(`Éditer l'élément avec l'ID ${id}`);
    // Implémentez ici la logique d'édition
  }

  // Méthode pour supprimer un élément
  deleteItem(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet élément ?')) {
      this.items = this.items.filter((item) => item.id !== id);
      this.filterList(); // Mettre à jour la liste filtrée après suppression
    }
  }


}
