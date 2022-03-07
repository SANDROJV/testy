import { Component, OnInit } from '@angular/core';

var skillInput:any = document.querySelector(".skillInput");
var skillList:any = document.querySelector(".skillList");

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   addSkill():any{
    var newSkill:any = document.createElement("li");
    newSkill.classList.add("input");
    newSkill.innerText = skillInput.nodeValue;
    skillList.appendChild(newSkill);
    if (skillInput.nodeValue === ""){
      return null;
    }
  
    var cancelButton = document.createElement("button");
    cancelButton.classList.add("button");
    skillList.appendChild(cancelButton)
    var e:any;
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
