import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Passenger } from "./models/passenger.interface";

@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) { console.log(http) }

    getPassengers(): Passenger[] {
        return [{
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
        }];
    }
}
