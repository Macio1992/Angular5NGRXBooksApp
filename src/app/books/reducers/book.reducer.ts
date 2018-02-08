import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/books.action';
import { BookState } from './app.states';
import { Pagination } from '../models/pagination';
import { Book } from '../models/book';

export const initialState: BookState = { books: [], searchTerm: '', error: '', pagination: null };

export function reducer(state = initialState, action: fromActions.All): BookState {

    switch(action.type){
        case fromActions.SEARCH: {
            
            const query = action.paylod;

            if(query === ''){
                return {
                    books: [],
                    searchTerm: '',
                    error: '',
                    pagination: null
                }
            }

            return {
                books: [],
                searchTerm: action.paylod,
                error: '',
                pagination: null
            }
        }
        case fromActions.SEARCH_DONE: {
            return {
                books: action.payload,
                searchTerm: '',
                error: '',
                pagination: null
            }
        }

        case fromActions.SEARCH_ERROR: {
            return {
                books: [],
                searchTerm: '',
                error: action.payload,
                pagination: null
            }
        }

        case fromActions.PAGINATE: {

            const start: number = action.payload.start;
            const end: number = action.payload.end;

            return {
                books: [],
                searchTerm: '',
                error: '',
                pagination: {start: start, end: end}
            }
        }

        case fromActions.PAGINATE_DONE: {
            return {
                books: action.payload,
                searchTerm: '',
                error: '',
                pagination: null
            }
        }

        default: {
            return state;
        }
    }

}

export const getBookState = createFeatureSelector<BookState>('bookState');

export const getBooks = createSelector(getBookState, (state: BookState) => state.books);
export const getSearchTerm = createSelector(getBookState, (state: BookState) => state.searchTerm);