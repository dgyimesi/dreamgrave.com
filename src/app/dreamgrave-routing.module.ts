import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkInProgressComponent } from './wip.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/about/intro', pathMatch: 'full' },
            { path: 'wip', component: WorkInProgressComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DreamgraveRoutingModule { }
