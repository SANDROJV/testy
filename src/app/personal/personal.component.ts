import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  data1:any = [];
  form = new FormGroup(
    {  
      fname: new FormControl('',Validators.required ),
      lname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),

    }
  )
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }


  saveInfo():any{
    if(this.form.valid){
      this.data1.push(this.form.value)
    }
  }
  
}
