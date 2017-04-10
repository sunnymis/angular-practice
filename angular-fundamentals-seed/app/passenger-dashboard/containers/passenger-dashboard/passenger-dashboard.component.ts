import { Component, OnInit } from '@angular/core';
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    <div>
        <h3>Airline Passengers</h3>
        <passenger-count
            [items]="passengers"
        >
        </passenger-count>
        <div *ngFor="let passenger of passengers">
            {{ passenger.fullname }}
        </div>
        <passenger-detail
            *ngFor="let passenger of passengers"
            [detail]="passenger"
            (remove)="handleRemove($event)"
            (edit)="handleEdit($event)">
        </passenger-detail>
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor() { }
    ngOnInit() {
        console.log('ngOnInit()')
        this.passengers = [{
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
    }

    handleRemove(removedPassenger) {
        this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id != removedPassenger.id);
    }

    handleEdit(edittedPassenger) {
        this.passengers = this.passengers.map((passenger: Passenger) => {
            if (passenger.id === edittedPassenger.id) {
                passenger = Object.assign({}, passenger, edittedPassenger);
            }
            return passenger;
        });
        console.log(this.passengers);
    }
}
