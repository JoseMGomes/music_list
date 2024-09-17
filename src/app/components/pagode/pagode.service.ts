import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../../List';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagodeService {
  private url = 'http://localhost:3000/pagodeDB'

  constructor(private _httpClient: HttpClient) { }

  getPagode(): Observable<List[]> {
    return this._httpClient.get<List[]>(this.url)
  }

}
