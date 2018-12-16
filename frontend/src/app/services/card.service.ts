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

  addCard(card: Card): Observable<any> {
    return this.http.post(this.baseUrl + 'cards/newcard/', card,  this.getAuthHeaders());
  }

  editCard(card: Card, card_id: number): Observable<any> {
    return this.http.put(this.baseUrl + 'cards/mycards/' + card_id + '/', card, this.getAuthHeaders());
  }

  deleteCard(card_id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'cards/mycards/' + card_id + '/', this.getAuthHeaders());
  }

  postFile(fileToUpload: File) {

    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    return this.http.post(this.baseUrl, formData);
  }

  getCompany(): Observable<any> {
    return this.http.get(this.baseUrl + 'cards/companies/', this.getAuthHeaders());
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }

}
