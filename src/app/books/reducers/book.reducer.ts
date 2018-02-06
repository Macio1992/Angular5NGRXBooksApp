import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/books.action';
import { BookState } from './app.states';

export const initialState: BookState = { books: [], searchTerm: '', error: '' };

export function reducer(state = initialState, action: fromActions.All): BookState {

    switch(action.type){
        case fromActions.SEARCH: {
            
            const query = action.paylod;

            if(query === ''){
                return {
                    books: [],
                    searchTerm: '',
                    error: ''
                }
            }

            return {
                books: [],
                searchTerm: action.paylod,
                error: ''
            }
        }
        case fromActions.SEARCH_DONE: {
            return {
                books: action.payload,
                searchTerm: '',
                error: ''
            }
        }

        case fromActions.SEARCH_ERROR: {
            return {
                books: [],
                searchTerm: '',
                error: action.payload
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