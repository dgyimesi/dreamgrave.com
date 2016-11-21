import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private cache: any;

    constructor(private http: Http) { 
        this.cache = {};

        // Prefetch
        this.fetch('catalogue');
    }

    public get(key: string): Observable<any> {
        let inCache = this.cache[key];

        return inCache ? Observable.of(this.cache[key]) : this.fetch(key);
    }

    private fetch(key: string): Observable<any> {
        return this.http.get(`/api/data/${key}`).map(response => response.json()).do(response => this.cache[key] = response);
    }
}