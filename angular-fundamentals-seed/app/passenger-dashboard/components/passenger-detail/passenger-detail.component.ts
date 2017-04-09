import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [class.checked-in]="detail.checkedIn"></span>
            <p>{{ detail.fullname }}</p>
            <div class="date">
                Check in Date:
                {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMd' | uppercase) : 'Not checked in' }}
            </div>
            <div class="children">
                Children:
                {{ detail.children?.length || 0}}
            </div>
        </div>
    `
})

export class PassengerDetailComponent {
    @Input() detail: Passenger;
}
