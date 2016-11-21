import { Injectable } from '@angular/core';

@Injectable()
export class UrlizeService {
    constructor() { 
    }

    public getUrlSafeName(str: string): string {
        return str.replace(/[^\da-z]/ig, '-').replace(/-+/g, '-').toLowerCase();
    }
}