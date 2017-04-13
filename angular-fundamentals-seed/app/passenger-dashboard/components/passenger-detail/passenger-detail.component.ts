import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [class.checked-in]="detail.checkedIn"></span>
            <p *ngIf="!editing">{{ detail.fullname }}</p>
            <div *ngIf="editing">
                <input 
                    [value]="detail.fullname"
                    (input)="onNameChange(name.value)"
                    #name
                >
            </div>
            <div class="date">
                Check in Date:
                {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMd' | uppercase) : 'Not checked in' }}
            </div>
            <button (click)="toggleEdit()">
                {{ editing ? 'Done' : 'Edit' }}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
            <button (click)="goToPassenger()">
                View
            </button>
        </div>
    `
})

export class PassengerDetailComponent implements OnChanges {
    @Input() detail: Passenger;
    @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
    @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
    @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    editing: boolean = false;

    constructor() { }

    ngOnChanges(changes) {
        if (changes.detail) {
            // We are reassignign the value of this.detail to 
            // the value ngOnChanges initially receives. 
            // Changing the reference makes it so we can have
            // local state for the detail that doesn't affect
            // root component references to this.detail. 
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
        console.log(changes);
    }

    onNameChange(value: string) {
        this.detail.fullname = value;
    }
    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
    onRemove() {
        this.remove.emit(this.detail);
    }

    goToPassenger() {
        this.view.emit(this.detail);
    }

}

/*
old children code
<div class="children">
    Children:
    {{ detail.children?.length || 0}}
</div>
*/
