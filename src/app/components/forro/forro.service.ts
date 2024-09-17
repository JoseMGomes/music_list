import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../../List';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForroService {
  private url = 'http://localhost:3000/forroDB'

  constructor(private _httpClient: HttpClient) { }

  getForro(): Observable<List[]> {
    return this._httpClient.get<List[]>(this.url)
  }
}
