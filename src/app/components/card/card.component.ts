import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  sertanejoColor: string = 'bg-secondary';
  funkColor: string = 'bg-secondary';
  pagodeColor: string = 'bg-secondary';
  forroColor: string = 'bg-secondary';

  resetColors() {
    this.sertanejoColor = 'bg-secondary';
    this.funkColor = 'bg-secondary';
    this.pagodeColor = 'bg-secondary';
    this.forroColor = 'bg-secondary';
  }

  chargeSertanejo() {
    this.resetColors();
    this.sertanejoColor = 'bg-primary text-white';
  }
  chargeFunk() {
    this.resetColors();
    this.funkColor = 'bg-primary text-white';
  }
  chargePagode() {
    this.resetColors();
    this.pagodeColor = 'bg-primary text-white';
  }
  chargeForro() {
    this.resetColors();
    this.forroColor = 'bg-primary text-white';
  }
}
