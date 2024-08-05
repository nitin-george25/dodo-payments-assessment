import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'assets/data/';

  constructor(private http: HttpClient) {}

  getData(fileName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${fileName}`);
  }
}
