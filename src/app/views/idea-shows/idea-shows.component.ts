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
pull='assets/ideas.json';
ideas:Ideas[]|null=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
     this.http.get<Ideas[]>(this.pull,{
       responseType:'json',
      observe:'response'
     }).subscribe(o=>{
        this.ideas=o.body
     })

  }

}
