import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Card } from '../models/card';

@Injectable()
export class CardService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get(this.baseUrl + 'cards/mycards/', this.getAuthHeaders());
  }



  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }

}
