import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})

export class EndComponent implements OnInit {
  constructor(public router: Router){}

  ngOnInit(): void {
  }

  
  async submit(){

    function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }

    var toHide = document.getElementById('toHide');
    toHide?.remove()

    await delay(200)
    this.createWelcome()

    await delay(3000);
    this.router.navigate(['welcome']);

  }

  goBack(){
    this.router.navigate(['insights'])
  }
  

  createWelcome(){
    var Welcome = document.createElement('p')
    Welcome.innerText = 'Thanks for Joining 😊'
    var toShow = document.getElementById('toShow')
    toShow?.appendChild(Welcome)
  }
}


