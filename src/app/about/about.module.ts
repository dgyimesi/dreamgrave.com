import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal/node';
import { CommonModule } from '@angular/common';

import { WorkInProgressComponent } from '../wip.component';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    imports: [
        // UniversalModule,
        CommonModule,
        AboutRoutingModule
    ],
    exports: [
        AboutComponent
    ],
    declarations: [
        AboutComponent,

        WorkInProgressComponent
    ]
})
export class AboutModule { }
