import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  data3:any = [];
  form = new FormGroup(
    {  
      Sairme: new FormControl('' ),
      Home: new FormControl(''),
      Hybrid: new FormControl(''),
      covidYes: new FormControl(''),
      covidNo: new FormControl('' ),
      covidWhen: new FormControl('',Validators.required),
      vaccYes: new FormControl(''),
      vaccNo: new FormControl(''),
      vaccWhen: new FormControl('',Validators.required),

    }
  )
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  saveInfo():any{
    if(this.form.valid){
      this.data3.push(this.form.value)
      this.data = this.data3
     }
  }
  
}
