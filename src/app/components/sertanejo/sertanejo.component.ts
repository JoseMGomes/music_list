import { Component, OnInit } from '@angular/core';
import { SertanejoService } from './sertanejo.service';
import { List } from '../../List';

@Component({
  selector: 'app-sertanejo',
  templateUrl: './sertanejo.component.html',
  styleUrl: './sertanejo.component.css',
})
export class SertanejoComponent implements OnInit {
  public sertanejos: List[] = [];

  constructor(private _sertanejoService: SertanejoService) {}

  ngOnInit(): void {
    this._sertanejoService.getSertanejo().subscribe(
      (data: List[]) => {
        this.sertanejos = data.map(
          (item) => new List(item.id, item.name, item.time)
        );
      },
      (error) => {
        console.error('Erro ao carregar dados', error);
      }
    );
  }
}
