import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
// TODO: rename FocusService as it reflects context-driven behaviour of it, and also covers up nicely that I've fucked up being consequent at application logic/UI logic design :O 
export class FilterService {
    public options: string[];
    public selected: number;

    private optionsChangedSubject: Subject<string[]>;
    private optionSelectedSubject: Subject<number>;

    constructor() {
        this.optionsChangedSubject = new Subject<string[]>();
        this.optionSelectedSubject = new Subject<number>();
    }

    get onOptionsChanged(): Observable<string[]> {
        return this.optionsChangedSubject.asObservable();
    }
    
    get onOptionSelected(): Observable<number> {
        return this.optionSelectedSubject.asObservable();
    }

    public registerOptions(options: string[]) {
        this.options = options;

        this.optionsChangedSubject.next(this.options);        
    }

    public selectOption(index: number) {
        this.optionSelectedSubject.next(index);
    }
}