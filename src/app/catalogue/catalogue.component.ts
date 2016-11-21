import { Component, Input, Renderer, ViewChild, AfterContentChecked } from '@angular/core';
import { trigger, state, style, transition, animate, } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { CatalogueItem, ItemType } from './catalogue-item.model';
import { CatalogueService } from './catalogue.service';
import { FilterService } from '../filter.service';

// TODO: refact mixed-up catalogue item type filter vs. selected item logic in route handling.
@Component({
    selector: 'catalogue',
    templateUrl: './catalogue.component.html',
    styleUrls: ['catalogue.component.css'],
    host: {
        '[@routeAnimation]': 'true',
        'page': ''
    },
    // TODO: migrate CatalogItem selection animations to Angular native
    animations: [
        trigger('routeAnimation', [
            state('*', style({ transform: 'translateX(0)', opacity: 1 })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)', opacity: 0 }),
                animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
            ]),
            transition('* => void',
                animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
                    transform: 'translateX(-100%)',
                    opacity: 0
                }))
            )
        ])
    ],
    providers: [CatalogueService]
})
export class CatalogueComponent implements AfterContentChecked {
    private catalogue: CatalogueItem[];
    private selectedItemIndex: number;
    private hasRoute: boolean;
    private typeFilter: ItemType;
    private typeFilterOptions: string[];

    private itemType = ItemType;
    
    @ViewChild('plane') plane;

    constructor(private catalogueService: CatalogueService, private router: Router, private route: ActivatedRoute, private filterService: FilterService, private renderer: Renderer) {
        this.catalogue = [];
        this.typeFilter = null;
        this.typeFilterOptions = ['all', 'album', 'cd', 'video'];

        this.catalogueService.fetchCatalogue().subscribe((catalogue: CatalogueItem[]) => {
            this.catalogue = catalogue;

            // TODO: create model for filter options; populate options by catalogue ItemTypes (via generators maybe?)
            this.filterService.selectOption(0);
            this.filterService.registerOptions(this.typeFilterOptions);
            this.filterService.onOptionSelected.subscribe((index) => this.filterCatalogue(index));

            this.selectedItemIndex = this.hasRoute ? this.selectedItemIndex : this.catalogue.length - 1;
           
            let route = this.catalogueService.getUrl(this.catalogue[this.selectedItemIndex]);

            if (route) {
                this.router.navigate(['catalogue', route]);
            }
        });

        this.route.params.subscribe((params: any) => {
            // TODO: releases and filter types are mixed up in this parameter. Separate filter and item selection logic (through hard-coded routes maybe?)
            if (params.release) {
                let typeFilterIndex = this.typeFilterOptions.indexOf(params.release);

                if (typeFilterIndex !== -1) {
                    this.selectedItemIndex = -1;

                    this.filterService.onOptionsChanged.subscribe(() => { 
                        this.filterService.selectOption(typeFilterIndex);
                        this.filterCatalogue(typeFilterIndex);
                    });
                } else {
                    let index = +params.release.substring(2, 4);

                    this.selectedItemIndex = isNaN(index) ? -1 : index;
                }
                
                this.hasRoute = true;
            }
        });
    }

    ngAfterContentChecked() {
        this.focusItem();
    }

    // TODO: refactor this with style attribute, or with animations attribute. See About Component; move item transitions into base class.
    private focusItem(): void {
        this.renderer.setElementStyle(this.plane.nativeElement, 'transform', `translateX(${-(this.catalogue.length - this.selectedItemIndex - 1) * 100}vw)`);
    }

    // TODO: prevent mixing up filter selection indices with options array indices
    private filterCatalogue(index: number) {
        if (index === 0) {
            this.typeFilter = null;
        } else {
            // TODO: Terminate catalogue item type ID / filter index mismatch, then refactor.
            this.typeFilter = index - 1;

            if (this.selectedItemIndex >= 0 && this.catalogue[this.selectedItemIndex].type !== this.typeFilter) {
                this.selectedItemIndex = -1;
            }
        }
    }

    // DEPRECATED
    // private onDefaultAction(actionOptions: any[]) {
    //     let defaultUrl: string;
    //     let defaultIndex = 0;
        
    //     actionOptions.forEach((action, index) => {
    //         if (action.default) {
    //             defaultIndex = index;
    //         }
            
    //     });

    //     defaultUrl = actionOptions[defaultIndex].url;
    // }
}
