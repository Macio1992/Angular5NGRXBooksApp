import { Component, Input } from "@angular/core";
import { Book } from "../models/book";


@Component({
    selector: 'book',
    templateUrl: './book.html',
    styleUrls: ['./book.scss']
})

export class BookComponent {
    @Input() book: Book;
}