import { Component } from '@angular/core';

@Component({
    selector: 'wip',
    template: `
        <div>Page is under construction. Check back later! Until then go and</div>
        <div>
            <a routerLink="/">&raquo; read about Dreamgrave</a>
            <a routerLink="/catalogue">&raquo; check out the catalogue</a>
        </div>
        <div>For press and media enquiries please contact</div>
        <div>
            <a href="mailto:band@dreamgrave.com">&raquo; via email: band@dreamgrave.com</a>
            <a href="tel:+36304945899">&raquo; or directly: Dömötör Gyimesi</a>
        </div>
    `,
    styles: [`
        :host {
            font-family: 'bebas';
            flex-direction: column;
            align-self: center;
            font-size: 32px; 
        }

        :host > div {
            flex-direction: column;
            margin: 30px 0;
        }

        :host > div > a {
            display: block;
            line-height: 32px;
        }
    `]
})
export class WorkInProgressComponent {
}
