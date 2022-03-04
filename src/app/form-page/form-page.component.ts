import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  checkbox1: "on" | "off" = "off"
  checkbox: "on" | "off" = "on"
  constructor() { }

  ngOnInit(): void {
  }

}
