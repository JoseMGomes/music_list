import { Component, OnInit } from '@angular/core';
import { List } from '../../List';
import { ForroService } from './forro.service';

@Component({
  selector: 'app-forro',
  templateUrl: './forro.component.html',
  styleUrl: './forro.component.css'
})
export class ForroComponent implements OnInit{
  public forros: List[] = [];

  constructor(private _forroService: ForroService) {}

  ngOnInit(): void {
    this._forroService.getForro().subscribe(
      (data: List[]) => {
        this.forros = data.map(
          (item) => new List(item.id, item.name, item.time)
        );
      },
      (error) => {
        console.error('Erro ao carregar dados', error);
      }
    );
  }
}
