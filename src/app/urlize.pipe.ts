import { Pipe, PipeTransform } from '@angular/core';
import { UrlizeService } from './urlize.service';

@Pipe({ name: 'urlize' })
export class UrlizePipe implements PipeTransform {
    constructor(private us: UrlizeService) {
    }

    transform(value) {
        // TODO: move this implementation into a single source ()
        return this.us.getUrlSafeName(value);
    }
}