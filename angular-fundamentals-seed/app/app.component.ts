import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">Get Value</button>
      <input type="text" 
        #username 
        (input)="handleInput($event.target.value)"
        />
      <div>{{ title }}</div>
      <div *ngIf="name.length > 3">
        Searching for {{ name }}
      </div>
      <div>
        <h3>Airline Passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            {{ i }}: {{passenger.fullname}}
          </li>
        </ul>
      </div>
    </div>
  `
})
export class AppComponent {
  title: string
  name: string = '';
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: true
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: false
  }]
  constructor() {
    this.title = 'Ultimate Angular'
  }
  handleClick(value: any) {
    console.log(value);
  }
  handleInput(value: any) {
    this.name = value;
  }
}
