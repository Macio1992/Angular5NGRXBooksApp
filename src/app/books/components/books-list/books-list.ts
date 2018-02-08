import { Component, Input, OnInit } from "@angular/core";
import { Book } from "../../models/book";

@Component({
    selector: 'books-list',
    templateUrl: './books-list.html'
})

export class BooksListComponent {
    @Input() books: Book[];
}