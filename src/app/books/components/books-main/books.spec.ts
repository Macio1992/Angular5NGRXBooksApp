import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { BookSearchComponent } from "../book-search/book-search";
import { BookComponent } from "../book/book";
import { BooksListComponent } from "../books-list/books-list";
import { RouterTestingModule } from '@angular/router/testing';
import * as book from '../../actions/books.action';
import * as fromBooks from '../../reducers/reducers';
import * as fromAppState from '../../reducers/app.states';
import { BooksComponent } from "../books-main/books-main";

describe('Search Books', ()=>{

    let fixture: ComponentFixture<BooksComponent>;
    let store: Store<fromAppState.BookState>;
    let instance: BooksComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    books: combineReducers(fromBooks.reducers)
                }),
                RouterTestingModule,
                FormsModule
            ],
            declarations:[
                BookSearchComponent,
                BookComponent,
                BooksListComponent,
                BooksComponent
            ]
        });

        fixture = TestBed.createComponent(BooksComponent);
        instance = fixture.componentInstance;
        store = TestBed.get(Store);
        
        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should dispatch a fromActions.SearchAction on search', ()=>{
        const $event: string = 'book name';
        const action = new book.SearchAction($event);

        instance.search($event);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    })

});