import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  lang: any = ['Choose','HTML', 'CSS', 'PHP', 'Laravel' ,'React.JS' ,'Vue.JS' ,'Svlete']
  data:any = []
  form = new FormGroup(
    {  
      language: new FormControl('',Validators.required ),
      exp: new FormControl('',Validators.required),
    }
  ) 
  constructor(private data1:DataService) { }

  ngOnInit(): void {
  }

   addSkill():any{
     if(this.form.valid){
      this.data.push(this.form.value)
      this.data1 = this.data
      //console.log(this.data1);
      //console.log(this.form.value);
     }
    
  }
  remove(exp:any){
    this.data = this.data.filter((d: { exp: number; })=>d.exp!=exp);
  }

}
