import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../../List';

@Injectable({
  providedIn: 'root',
})
export class ForroService {
  private url = 'http://localhost:3000/forroDB';

  constructor(private _httpClient: HttpClient) {}

  getForro(): Observable<List[]> {
    return this._httpClient.get<List[]>(this.url);
  }
}
