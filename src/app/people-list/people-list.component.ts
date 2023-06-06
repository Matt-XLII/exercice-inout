import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
@Input() peopleList: any[] = [];

@Output()
dataChange: EventEmitter<string> = new EventEmitter()

removeCard(name: string) {
  this.dataChange.emit(name)
}
}
