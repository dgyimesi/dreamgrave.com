import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalModule } from 'angular2-universal/node';

import { CatalogueRoutingModule } from './catalogue-routing.module';

import { FilterService } from '../filter.service';
import { DataService } from '../data.service';
import { UrlizeService } from '../urlize.service';

import { KeysPipe } from '../keys.pipe';
import { UrlizePipe } from '../urlize.pipe';
import { ReversePipe } from '../reverse.pipe';

import { CatalogueComponent } from './catalogue.component';

@NgModule({
    imports: [
        // UniversalModule,
        CommonModule,
        CatalogueRoutingModule
    ],
    exports: [
        CatalogueComponent
    ],
    providers: [
        UrlizeService,
        DataService,
        FilterService
    ],
    declarations: [
        KeysPipe,
        ReversePipe,
        UrlizePipe,
        
        CatalogueComponent
    ]
})
export class CatalogueModule { }
