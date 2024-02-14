import { Component } from '@angular/core';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormulaireComponent, RecapitulatifComponent], // Ajoutez cette ligne
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp2-KLEIN-Guillaume';
}
