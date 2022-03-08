import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  data1: any=[]
  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

  logTest(){
    console.log(this.data)
  }
}

