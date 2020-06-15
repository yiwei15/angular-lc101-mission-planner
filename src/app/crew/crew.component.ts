import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  inCrew: boolean = false;
  add(memberName:string, isFirst:boolean)  {
    for (let i=0; i<this.crew.length; i++)  {
      if (this.crew[i]['name'] === memberName)  {
        this.inCrew = true;
      }
    }
    if  (!this.inCrew)  {
    this.crew.push({name:memberName, firstMission:isFirst});
    }
  }

  remove(member:object) {
    let  index = this.crew.indexOf(member);
    this.crew.splice(index,1);
  }

  memberBeingEdited:object = null;
  edit(member:object) {
    this.memberBeingEdited = member;
  }

  save(name: string, memberObject: object) {
    memberObject['name'] = name;
    this.memberBeingEdited = null;
  }

}
