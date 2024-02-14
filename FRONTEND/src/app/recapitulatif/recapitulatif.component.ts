import { Component, OnInit } from '@angular/core';
import { DonneesFormulaireService } from '../donnees-formulaire.service';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html'
})
export class RecapitulatifComponent implements OnInit {
  nom: string = '';

  constructor(private donneesFormulaireService: DonneesFormulaireService) { }

  ngOnInit() {
    this.donneesFormulaireService.nomCourant.subscribe(nom => this.nom = nom);
  }
}
