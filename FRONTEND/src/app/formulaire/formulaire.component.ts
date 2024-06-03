import { Component } from '@angular/core';
import { DonneesFormulaireService } from '../donnees-formulaire.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html'
})
export class FormulaireComponent {
  nom: string = '';

  constructor(private donneesFormulaireService: DonneesFormulaireService) { }

  soumettre() {
    this.donneesFormulaireService.changerNom(this.nom);
  }
}
