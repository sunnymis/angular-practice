import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

@NgModule({
    imports: [CommonModule],
    exports: [PassengerDashboardComponent],
    declarations: [PassengerDashboardComponent],
    providers: [],
})
export class PassengerDashboardModule { }
