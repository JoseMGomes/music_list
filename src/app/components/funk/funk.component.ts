import { FunkService } from './funk.service';
import { Component, OnInit } from '@angular/core';
import { List } from '../../List';

@Component({
  selector: 'app-funk',
  templateUrl: './funk.component.html',
  styleUrls: ['./funk.component.css']
})
export class FunkComponent implements OnInit {
  public funks: List[] = [];

  constructor(private funkService: FunkService) {}

  ngOnInit(): void {
    this.loadFunkMusic();
  }

  loadFunkMusic(): void {
    this.funkService.getFunk().subscribe(
      (data: List[]) => {
        this.funks = data.map((item) => new List(item.id, item.name, item.time));
      },
      (error) => {
        console.error('Erro ao carregar dados', error);
      }
    );
  }

  removeMusic(index: number): void {
    if (confirm('Tem certeza que deseja remover essa música?')) {
      this.funks.splice(index, 1);
    }
  }
}
