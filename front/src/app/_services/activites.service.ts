import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/activites/';

@Injectable({
  providedIn: 'root'
})
export class ActivitesService {
  constructor(private http: HttpClient) { }

  getActivites(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
}