import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = '../assets/i18n/data.json';
@Injectable({
 providedIn: 'root'
})
export class DataService {

 constructor(private http: HttpClient) {
 }

 getData() {
   return this.http.get(URL);
 }
}
