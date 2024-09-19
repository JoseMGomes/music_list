import { Component, OnInit } from '@angular/core';
import { List } from '../../List';
import { PagodeService } from './pagode.service';

@Component({
  selector: 'app-pagode',
  templateUrl: './pagode.component.html',
  styleUrls: ['./pagode.component.css'],
})
export class PagodeComponent implements OnInit {
  public pagodes: List[] = [];

  constructor(private _pagodesService: PagodeService) {}

  ngOnInit(): void {
    this._pagodesService.getPagode().subscribe(
      (data: List[]) => {
        this.pagodes = data.map(
          (item) => new List(item.id, item.name, item.time)
        );
      },
      (error) => {
        console.error('Erro ao carregar dados', error);
      }
    );
  }

  removeMusic(index: number): void {
    if (confirm('Tem certeza que deseja remover essa música?')) {
      this.pagodes.splice(index, 1);
    }
  }
}
