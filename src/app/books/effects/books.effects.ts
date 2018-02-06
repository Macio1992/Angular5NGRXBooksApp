import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BooksService } from '../services/books.service';
import { Observable } from 'rxjs/Observable';
import * as fromAction from '../actions/books.action';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { skip, takeUntil, catchError, map } from 'rxjs/operators';

import { Book } from '../models/book';
import { SearchDoneAction } from '../actions/books.action';

@Injectable()
export class BooksEffects {

    @Effect()
    search$: Observable<Action> = this.actions$
    .ofType<fromAction.SearchAction>(fromAction.SEARCH)
    .debounceTime(300)
    .map(action => action.paylod)
    .switchMap(query => {
        if(query === ''){
            return empty();
        }

        const nextSearch$ = this.actions$.pipe(
            ofType(fromAction.SEARCH), skip(1)
        );

        return this.booksService.search(query).pipe(
            takeUntil(nextSearch$),
            map((books: Book[]) => new SearchDoneAction(books)),
            catchError(err => of(new fromAction.SearchErrorAction(err)))
        );

    })

    constructor(private booksService: BooksService, private actions$: Actions){}

}