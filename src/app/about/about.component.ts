import { Component, Input, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FilterService } from '../filter.service';

// TODO: swap background images (fixed set?)
// TODO: add 10s scaling effect (1.1?)
@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['about.component.css'],
    host: {
        '[@routeAnimation]': 'true',
        page: ''
    },
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
    ]
})
export class AboutComponent {
    private selectedItemIndex: number = 0;

    constructor(private filterService: FilterService, private route: ActivatedRoute) {
        let options = ['intro', 'biography', 'members'];

        this.filterService.registerOptions(options);
        this.filterService.onOptionSelected.subscribe(index => this.selectedItemIndex = index);
        this.filterService.selectOption(0);

        this.route.params.subscribe((params: any) => {
            if (params.target) {
                let index = options.indexOf(params.target);

                this.selectedItemIndex = index;
                this.filterService.selectOption(index);
            }
        });
    }
}
