import { Component, Input } from '@angular/core';
import { FilterService } from './filter.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    @Input() page: string;

    private options: string[];
    private selected: number;
    private optionsVisible: boolean;

    constructor(private filterService: FilterService) {
        this.filterService.onOptionsChanged.subscribe(options =>  {
            this.optionsVisible = false;

            setTimeout(() => {
                this.options = options;
                this.optionsVisible = true;
            }, 500);
        });
        this.filterService.onOptionSelected.subscribe(index => this.selected = index);
    }

    public selectOption(index: number) {
        this.filterService.selectOption(index);
    }
}
