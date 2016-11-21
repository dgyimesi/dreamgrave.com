import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { DataService } from '../data.service';
import { UrlizeService } from '../urlize.service';
import { CatalogueItem, ItemType } from './catalogue-item.model';

@Injectable()
export class CatalogueService {
    constructor(private data: DataService, private us: UrlizeService) { 
    }

    public fetchCatalogue(): Observable<CatalogueItem[]> {
        return this.data.get('catalogue');
    }

    public getUrlSafeName(item: CatalogueItem): string {
        return this.us.getUrlSafeName(item.name);
    }

    public getUrl(item: CatalogueItem): string {
        return item && this.us.getUrlSafeName(`${item.catalogueNo}-${item.name}`);
    }
}