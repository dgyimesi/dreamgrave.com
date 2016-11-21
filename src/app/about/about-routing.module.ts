import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'about', redirectTo: 'about/intro', pathMatch: 'full' },
            { path: 'about/:target', component: AboutComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AboutRoutingModule { }
