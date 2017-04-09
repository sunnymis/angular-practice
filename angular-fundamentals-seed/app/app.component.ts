import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>      
    </div>
  `
})
export class AppComponent {

}

/*
Examples:
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

<button (click)="handleClick(username.value)">Get Value</button>
<input type="text" 
  #username 
  (input)="handleInput($event.target.value)"
  />
<div>{{ title }}</div>
<div *ngIf="name.length > 3">
  Searching for {{ name }}
</div>

export class AppComponent {
  title: string
  name: string = '';
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
*/
