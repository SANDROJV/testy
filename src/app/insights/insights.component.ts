import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
  data4:any = [];
  form = new FormGroup(
    {  
      devYes: new FormControl('' ),
      devNo: new FormControl(''),
      devYou: new FormControl(''),
      tellMe: new FormControl(''),

    }
  )

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  saveInfo():any{
    if(this.form.valid){
      this.data4.push(this.form.value)
      this.data = this.data4
     }
  }
}
