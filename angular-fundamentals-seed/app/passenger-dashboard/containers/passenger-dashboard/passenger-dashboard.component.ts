import { Component, OnInit } from '@angular/core';
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Router } from '@angular/router';

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
            (edit)="handleEdit($event)"
            (view)="handeView($event)">
        </passenger-detail>
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor(
        private router: Router,
        private passengerService: PassengerDashboardService) { }
    ngOnInit() {
        console.log('ngOnInit()')
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[]) => this.passengers = data,
            (error) => console.log("ERROR", error));

    }

    handleRemove(removedPassenger) {
        this.passengerService
            .removePassengers(removedPassenger)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id != removedPassenger.id);
            });
    }

    handleEdit(edittedPassenger) {
        this.passengerService
            .updatePassengers(edittedPassenger)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === edittedPassenger.id) {
                        passenger = Object.assign({}, passenger, edittedPassenger);
                    }
                    return passenger;
                });
                console.log(this.passengers);
            });
    }

    handeView(passenger: Passenger) {
        this.router.navigate(['/passengers', passenger.id]);
    }
}
