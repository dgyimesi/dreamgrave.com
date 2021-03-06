// Fix Material Support
import { __platform_browser_private__ } from '@angular/platform-browser';
function universalMaterialSupports(eventName: string): boolean { return Boolean(this.isCustomEvent(eventName)); }
__platform_browser_private__.HammerGesturesPlugin.prototype.supports = universalMaterialSupports;
// End Fix Material Support


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { TestModule } from './test/test.module';
import { AboutModule } from './about/about.module';
import { CatalogueModule } from './catalogue/catalogue.module';

import { DreamgraveComponent } from './dreamgrave.component';
import { DreamgraveRoutingModule } from './dreamgrave-routing.module';

import { FilterService } from './filter.service';

import { HeaderComponent } from './header.component';
import { PlayerComponent } from './player.component';
import { NavbarComponent } from './navbar.component';

import { Cache } from './universal-cache';

@NgModule({
    bootstrap: [DreamgraveComponent],
    declarations: [DreamgraveComponent, HeaderComponent, PlayerComponent, NavbarComponent],
    imports: [
        UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
        FormsModule,

        TestModule,
        AboutModule,
        CatalogueModule,

        DreamgraveRoutingModule
    ],
    providers: [
        FilterService,
                
        { provide: 'isBrowser', useValue: isBrowser },
        { provide: 'isNode', useValue: isNode },
        Cache
    ]
})
export class MainModule {
    constructor(public cache: Cache) {

    }
    // we need to use the arrow function here to bind the context as this is a gotcha in Universal for now until it's fixed
    universalDoDehydrate = (universalCache) => {
        universalCache['Cache'] = JSON.stringify(this.cache.dehydrate());
    }
    universalAfterDehydrate = () => {
        this.cache.clear();
    }
}
