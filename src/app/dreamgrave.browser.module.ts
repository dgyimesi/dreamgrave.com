import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { TestModule } from './test/test.module';
import { AboutModule } from './about/about.module';
import { CatalogueModule } from './catalogue/catalogue.module';

import { DreamgraveComponent } from './dreamgrave.component';
import { DreamgraveRoutingModule } from './dreamgrave-routing.module';

import { HeaderComponent } from './header.component';
import { PlayerComponent } from './player.component';
import { NavbarComponent } from './navbar.component';

import { DataService } from './data.service';

import { Cache } from './universal-cache';

@NgModule({
    bootstrap: [DreamgraveComponent],
    declarations: [DreamgraveComponent, HeaderComponent, PlayerComponent, NavbarComponent],
    imports: [
        UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
        FormsModule,

        TestModule,
        AboutModule,
        CatalogueModule,

        DreamgraveRoutingModule
    ],
    providers: [
        { provide: 'isBrowser', useValue: isBrowser },
        { provide: 'isNode', useValue: isNode },
        Cache,
        DataService
    ]

})
export class MainModule {
    constructor(public cache: Cache) {

    }
}
