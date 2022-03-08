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
  data2:any = []
  form = new FormGroup(
    {  
      language: new FormControl('',Validators.required ),
      exp: new FormControl('',Validators.required),
    }
  ) 
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

   addSkill():any{
     if(this.form.valid){
      this.data2.push(this.form.value)
      this.data = this.data2

     }
    
  }
  remove(exp:any){
    this.data2 = this.data2.filter((d: { exp: number; })=>d.exp!=exp);
  }

}
