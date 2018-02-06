import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Book } from "../models/book";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BooksService {

    private URL = 'https://gwo.pl/booksApi/v1/search';

    constructor(private http: HttpClient){}

    search(searchTerm: string): Observable<Book[]>{
        return this.http.get<Book[]>(`${this.URL}?query=${searchTerm}`);
    }

}