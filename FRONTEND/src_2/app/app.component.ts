import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {FooterComponent} from './footer/footer.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, FooterComponent, RouterOutlet, NgIf, RecapitulatifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp2_Guillaume_KLEIN';
  formSubmitted = false; // Initialisation de la variable de contrôle

  handleFormSubmission(event: boolean) {
    this.formSubmitted = event; // Mise à jour basée sur l'événement émis
  }
  
}
