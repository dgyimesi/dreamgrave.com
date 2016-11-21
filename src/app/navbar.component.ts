import { Component, Input } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
    @Input() page: string;

    private routes: string[] = [
        'about', 'catalogue' //, 'media', 'live', 'store', 'press', 'contact'
    ]
}
