import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../../List';

@Injectable({
  providedIn: 'root'
})
export class FunkService {
  private url = 'http://localhost:3000/funkDB'

  constructor(private _httpClient: HttpClient) { }

  getFunk(): Observable<List[]> {
    return this._httpClient.get<List[]>(this.url)
  }
}
