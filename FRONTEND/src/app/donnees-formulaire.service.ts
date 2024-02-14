import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonneesFormulaireService {
  private nomSource = new BehaviorSubject<string>('');
  nomCourant = this.nomSource.asObservable();

  constructor() { }

  changerNom(nom: string) {
    this.nomSource.next(nom);
  }
}
