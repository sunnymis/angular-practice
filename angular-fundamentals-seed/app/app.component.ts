import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a 
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: item.exact}">
          {{ item.name }}
        </a> 
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    }
  ];
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
