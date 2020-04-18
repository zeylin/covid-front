import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Case, Total } from '../models';

const casesController = 'cases';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchDaily(): Observable<Case[]> {
    return this.http.get<Case[]>(`${environment.apiUrl}/${casesController}/daily`);
  }

  fetchTotal(): Observable<Total[]> {
    return this.http.get<Total[]>(`${environment.apiUrl}/${casesController}/cumuative`);
  }
}
