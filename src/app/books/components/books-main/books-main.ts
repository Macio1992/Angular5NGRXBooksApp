import { Component } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Book } from '../../models/book';
import { Store } from '@ngrx/store';
import { BookState } from '../../reducers/app.states';
import * as fromBookReducer from '../../reducers/book.reducer';
import * as fromActions from '../../actions/books.action';
import { global } from '../../../global/global';

@Component({
    selector: 'books-main',
	templateUrl: './books-main.html'
})

export class BooksComponent {
    
    books: Observable<Book[]>;
	searchTerm: Observable<string>;
	public totalPages: number = global.totalPageSize;
	paginatedBooks: Observable<Book[]>;

	constructor(private store: Store<BookState>){
		this.searchTerm = store.select(fromBookReducer.getSearchTerm);
		this.books = store.select(fromBookReducer.getBooks);
		this.paginatedBooks = store.select(fromBookReducer.getPaginatedBooks);
	}

	search(searchTerm: string){
		this.store.dispatch(new fromActions.SearchAction(searchTerm));
	}

	setPage(page: number){
		this.store.dispatch(new fromActions.PaginateAction({
			start: (this.totalPages*(page-1)),
			end: (page*this.totalPages)
		}));
	}

}