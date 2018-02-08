import { Book } from '../models/book';
import { Pagination } from '../models/pagination';

export interface AppState {
    bookState: BookState;
};

export interface BookState {
    books: Book[];
    searchTerm: string;
    error: string;
    pagination: Pagination;
}