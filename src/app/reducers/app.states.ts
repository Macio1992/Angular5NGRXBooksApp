import { Book } from '../models/book';

export interface AppState {
    bookState: BookState;
};

export interface BookState {
    books: Book[];
    searchTerm: string;
    error: string;
}