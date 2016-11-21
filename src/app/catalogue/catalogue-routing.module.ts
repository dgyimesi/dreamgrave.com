import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CatalogueComponent } from './catalogue.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'catalogue', component: CatalogueComponent },
            { path: 'catalogue/:release', component: CatalogueComponent,  }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CatalogueRoutingModule {
}
