import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Passenger } from "./models/passenger.interface";

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {

    constructor(private http: Http) { console.log(http) }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .map((response: Response) => response.json());
    }
}
