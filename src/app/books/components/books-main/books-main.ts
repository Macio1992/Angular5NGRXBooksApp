import { Component } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Book } from '../../models/book';
import { Store } from '@ngrx/store';
import { BookState } from '../../reducers/app.states';
import * as fromBookReducer from '../../reducers/book.reducer';
import * as fromActions from '../../actions/books.action';

@Component({
    selector: 'books-main',
	templateUrl: './books-main.html'
})

export class BooksComponent {
    
    books: Observable<Book[]>;
	searchTerm: Observable<string>;

	constructor(private store: Store<BookState>){
		this.searchTerm = store.select(fromBookReducer.getSearchTerm);
		this.books = store.select(fromBookReducer.getBooks);
	}

	search(searchTerm: string){
		// this.store.dispatch(new fromActions.SearchAction(searchTerm));
		this.store.dispatch(new fromActions.PaginateAction({start: 0, end: 6}))
	}

	setPage(page: number){
		console.log(page);

	}

}