import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}


interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate?: number,
  children: Child[] | null
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
            <span 
              class="status"
              [class.checked-in]="passenger.checkedIn"
            ></span>
            {{ i }}: {{passenger.fullname}}
            <p>{{ passenger | json }}</p>
            <div class="date">
              Check in Date:
              {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMd' | uppercase) : 'Not checked in' }}
            </div>
            <div class="children">
              Children:
              {{ passenger.children?.length || 0}}
            </div>
          </li>
        </ul>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <span 
              class="status"
              [ngClass]="{ 
                'checked-in': passenger.checkedIn ,
                'checked-out': !passenger.checkedIn
              }"
            ></span>
            {{ i }}: {{passenger.fullname}}
          </li>
        </ul>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <span 
              class="status"
              [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"
            ></span>
            {{ i }}: {{passenger.fullname}}
          </li>
        </ul>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <span 
              class="status"
              [ngStyle]="{
                backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
              }"
            ></span>
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
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Jessica', age: 1 }]
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
