import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [PassengerDashboardComponent],
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    providers: [PassengerDashboardService],
})
export class PassengerDashboardModule { }
