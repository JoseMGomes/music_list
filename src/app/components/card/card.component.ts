import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  sertanejoColor: string = 'bg-secondary';
  funkColor: string = 'bg-secondary';
  pagodeColor: string = 'bg-secondary';
  forroColor: string = 'bg-secondary';

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
    this.sertanejoColor = 'bg-yellow text-black'; // Atualize a cor do texto, se necessário
    this.showSertanejo = true;
  }

  chargeFunk() {
    this.resetColorsAndVisibility();
    this.funkColor = 'bg-yellow text-black';
    this.showFunk = true;
  }

  chargePagode() {
    this.resetColorsAndVisibility();
    this.pagodeColor = 'bg-yellow text-black';
    this.showPagode = true;
  }

  chargeForro() {
    this.resetColorsAndVisibility();
    this.forroColor = 'bg-yellow text-black';
    this.showForro = true;
    console.log('Forró ativado');
  }
}
