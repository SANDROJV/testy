import { Component, OnInit } from '@angular/core';

var skillInput = document.querySelector(".skillInput");
var skillList = document.querySelector(".skillList");

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   addSkill(){
    var newSkill = document.createElement("li");
    newSkill.classList.add("input");
    newSkill.innerText = skillInput.nodeValue;
    skillList.appendChild(newSkill);
    if (skillInput.nodeValue === ""){
      return null;
    }
  
    var cancelButton = document.createElement("button");
    cancelButton.classList.add("button");
    skillList.appendChild(cancelButton)
    var e;
    var it = e.target;
    if (it.classList[0] === "cancelButton"){
      let skillItself = it.parentElement;
      skillItself.classList.add("deletedItem");
      skillItself.addEventListener("transitionend", function () {
        skillItself.remove();
      });
    }
  }
  

}
