import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Mando} from '../models/mando.model';
@Injectable({
  providedIn: 'root'
})
export class MandosService {
  url='http://192.168.0.23:8080/';
  constructor(private http: HttpClient) { }

  insertarmando(mando:Mando){
    return this.http.post<Mando>(this.url+'Estado',mando);
  }
}
