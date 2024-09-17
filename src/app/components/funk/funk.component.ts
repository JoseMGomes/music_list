import { FunkService } from './funk.service';
import { Component, OnInit } from '@angular/core';
import { List } from '../../List';

@Component({
  selector: 'app-funk',
  templateUrl: './funk.component.html',
  styleUrls: ['./funk.component.css'] // Correção do nome do atributo
})
export class FunkComponent implements OnInit {
  public funks: List[] = [];

  constructor(private _funkService: FunkService) {}

  ngOnInit(): void {
    this._funkService.getFunk().subscribe(
      (data: List[]) => {
        this.funks = data.map(
          (item) => new List(item.id, item.name, item.time)
        );
      },
      (error) => {
        console.error('Erro ao carregar dados', error);
      }
    );
  }
}
