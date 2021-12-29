import { data } from './../../../model/data';
import { FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { DataService } from './../data.service';
import { Component, Injectable, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css'],
  providers:[DataService]
})
@Injectable()
export class FormAppComponent{


  data!:data;
  data2:any;
  interested_person: FormGroup;

  constructor(private dService:DataService){
      this.interested_person =new FormGroup({
      name: new FormControl(''),
      age : new FormControl(''),
      location : new FormControl(''),
      login:new FormGroup({
        email: new FormControl('',[Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        password:new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z/&#@$%^/]+$')])
      })

  })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
get name():AbstractControl | null{
  return this.interested_person.get('name');
}

  submit(){
    console.log(this.interested_person.value)

  }
  getTest(){
    this.dService.getData().subscribe((d)=>{
      const key=d.headers.keys();
      this.data2= key.map(k=>
        `${k}: ${d.headers.get(k)}`

      )
      this.data={...d.body!}
    })
  }
  updateData(){
    this.interested_person.patchValue({
      name: "obieze",
      login:{
        email: "obieze@gmail.com"
      }

    })
  }

}
