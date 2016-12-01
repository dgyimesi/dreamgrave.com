import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal/node';
import { CommonModule } from '@angular/common';

import { PressComponent } from './press.component';
import { PressRoutingModule } from './press-routing.module';

@NgModule({
    imports: [
        // UniversalModule,
        CommonModule,
        PressRoutingModule
    ],
    exports: [
        PressComponent
    ],
    declarations: [
        PressComponent
    ]
})
export class PressModule { }
