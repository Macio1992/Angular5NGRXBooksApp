import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/books.action';
import { BookState } from './app.states';
import { Pagination } from '../models/pagination';
import { Book } from '../models/book';

export const initialState: BookState = { books: [], searchTerm: '', error: '', start: 0, end: 0 };

export function reducer(state = initialState, action: fromActions.All): BookState {

    switch(action.type){
        case fromActions.SEARCH: {
            
            const query = action.paylod;

            if(query === ''){
                return {
                    books: [],
                    searchTerm: '',
                    error: '',
                    start: 0,
                    end: 0
                }
            }

            return {
                books: [],
                searchTerm: action.paylod,
                error: '',
                start: 0,
                end: 0
            }
        }
        case fromActions.SEARCH_DONE: {
            return {
                books: action.payload,
                searchTerm: state.searchTerm,
                error: '',
                start: 0,
                end: 0
            }
        }

        case fromActions.SEARCH_ERROR: {
            return {
                books: [],
                searchTerm: '',
                error: action.payload,
                start: 0,
                end: 0
            }
        }

        case fromActions.PAGINATE: {
            const start = action.payload.start;
            const end = action.payload.end;
            return {
                books: state.books,
                searchTerm: state.searchTerm,
                error: '',
                start: start,
                end: end
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
export const getPaginatedBooks = createSelector(
    getBookState,
    (state: BookState) => state.books.slice(state.start, state.end))