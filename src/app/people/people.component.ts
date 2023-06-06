import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
peopleList = [{name : "John",age : 25, hobby : "Karting"},
 {name : "Mary",age : 27, hobby : "Reading"}, 
 {name : "Peter",age : 29, hobby : "Skiing"}, 
 {name : "Sue",age : 31, hobby : "Golfing"},
  {name : "Joe",age : 33, hobby : "Fishing"}
]

  onDataChange(event: string) {
    this.peopleList = this.peopleList.filter((person) => person.name !== event)
}
}
