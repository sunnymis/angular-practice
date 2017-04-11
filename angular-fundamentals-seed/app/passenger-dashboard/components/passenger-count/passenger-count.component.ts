import { Component, Input } from '@angular/core';
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-count',
    template: `
        <div>
        Checked In Passengers: {{ checkedInCount() }}/{{ items?.length }}
        </div>
    `
})

export class PassengerCountComponent {
    @Input() items: Passenger[];
    checkedInCount() {
        if (!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}
