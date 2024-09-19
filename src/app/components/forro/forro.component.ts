import { Component, OnInit } from '@angular/core';
import { ForroService } from './forro.service';
import { List } from '../../List';

@Component({
  selector: 'app-forro',
  templateUrl: './forro.component.html',
  styleUrls: ['./forro.component.css']
})
export class ForroComponent implements OnInit {
  public forros: List[] = [];

  constructor(private _forroService: ForroService) {}

  ngOnInit(): void {
    this._forroService.getForro().subscribe(
      (data: List[]) => {
        this.forros = data.map(item => new List(item.id, item.name, item.time));
      },
      (error) => {
        console.error('Erro ao carregar dados do forró', error);
      }
    );
  }

  removeMusic(index: number): void{
    if (confirm('Tem certeza que deseja remover essa música?'))
      this.forros.splice(index, 1)
  }
}
