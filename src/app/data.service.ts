import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators'
import { data } from 'model/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = "https://api.jsonbin.io/b/61cc1993c277c467cb37fb15/4"
  textUrl =  "assets/text2.txt.txt"
  constructor(private http:HttpClient){

  }

  getData():Observable<HttpResponse<data[]>>{
     return this.http.get<data[]>(this.dataUrl,{
       responseType:'json',
      observe:'response'
     }).pipe(
       retry(10000),
       catchError(this.handleError)
     )
  }
  getTextData(){
     return this.http.get(this.textUrl,{
       responseType:'text'
     })
     
  }
  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
}
