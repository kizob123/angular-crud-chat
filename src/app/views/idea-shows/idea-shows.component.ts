import { Ideas } from './../../../../model/ideas';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { data } from 'model/data';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-idea-shows',
  templateUrl: './idea-shows.component.html',
  styleUrls: ['./idea-shows.component.css']
})
export class IdeaShowsComponent implements OnInit {
pull='assets/ideas.json?=ideas';
ideas?:Ideas[];
  constructor(private http:HttpClient) {


  }

  ngOnInit(): void {
this.getData()
  }
  getData(){
     this.http.get<object>(this.pull,{
       responseType:'json'}).subscribe(o=>{
        //const n:Ideas[]= JSON.parse(o);

        this.ideas=JSON.parse(JSON.stringify(o)).ideas;



     })

  }

}
