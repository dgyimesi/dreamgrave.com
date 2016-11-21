import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'dreamgrave',
    templateUrl: 'dreamgrave.component.html',
    styleUrls: ['dreamgrave.component.css']
})
export class DreamgraveComponent {
    private page: string;

    constructor(private router: Router) {
        this.router.events.subscribe((event: NavigationEnd) => {
            // TODO: show sub page names also in header.
            this.page = (event.urlAfterRedirects || event.url).split('/')[1];
        })
    }
}
