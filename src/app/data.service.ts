import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators'
import { data } from 'model/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = "https://api.jsonbin.io/b/61cc1993c277c467cb37fb15/2"
  constructor(private http:HttpClient){

  }

  getData():Observable<HttpResponse<data>>{
     return this.http.get<data>(this.dataUrl,{
       responseType:'json',
      observe:'response'
     })
  }
}
