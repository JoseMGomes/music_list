import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'], // Certifique-se de que o nome esteja correto
})
export class CardComponent {
  sertanejoColor: string = 'bg-secondary';
  funkColor: string = 'bg-secondary';
  pagodeColor: string = 'bg-secondary';
  forroColor: string = 'bg-secondary';

  // Variáveis para controlar a exibição das playlists
  showSertanejo: boolean = false;
  showFunk: boolean = false;
  showPagode: boolean = false;
  showForro: boolean = false;

  resetColorsAndVisibility() {
    this.sertanejoColor = 'bg-secondary';
    this.funkColor = 'bg-secondary';
    this.pagodeColor = 'bg-secondary';
    this.forroColor = 'bg-secondary';

    this.showSertanejo = false;
    this.showFunk = false;
    this.showPagode = false;
    this.showForro = false;
  }

  chargeSertanejo() {
    this.resetColorsAndVisibility();
    this.sertanejoColor = 'bg-primary text-white';
    this.showSertanejo = true;
  }

  chargeFunk() {
    this.resetColorsAndVisibility();
    this.funkColor = 'bg-primary text-white';
    this.showFunk = true;
  }

  chargePagode() {
    this.resetColorsAndVisibility();
    this.pagodeColor = 'bg-primary text-white';
    this.showPagode = true;
  }

  chargeForro() {
    this.resetColorsAndVisibility();
    this.forroColor = 'bg-primary text-white';
    this.showForro = true;
    console.log('Forró ativado');
  }
}
