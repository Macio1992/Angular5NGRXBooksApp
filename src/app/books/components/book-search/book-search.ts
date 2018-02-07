import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'book-search',
    templateUrl: './book-search.html'
})

export class BookSearchComponent {

    @Input() searchQuery;
    @Output() search = new EventEmitter<string>();

}