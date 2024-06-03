// Importez BrowserModule pour lancer votre app dans le navigateur et FormsModule pour utiliser les formulaires
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ajoutez cette ligne

// Importez vos composants
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

@NgModule({
  declarations: [
    // Déclarez vos composants ici
    AppComponent,
    FormulaireComponent,
    RecapitulatifComponent
  ],
  imports: [
    // Importez BrowserModule et FormsModule ici
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
