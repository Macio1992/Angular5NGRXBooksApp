import { Action } from "@ngrx/store";
import { Book } from "../models/book";
import { Pagination } from "../models/pagination";

export const SEARCH = '[Books] Search';
export const SEARCH_DONE = '[Books] Search Done';
export const SEARCH_ERROR = '[Books] Search Error';
export const PAGINATE = '[Books] Paginate';
export const PAGINATE_DONE = '[Books] Paginate Done';

export class SearchAction implements Action{
    readonly type = SEARCH;

    constructor(public paylod: string){}
}

export class SearchDoneAction implements Action {
    readonly type = SEARCH_DONE;

    constructor(public payload: Book[]){}
}

export class SearchErrorAction implements Action {
    readonly type = SEARCH_ERROR;

    constructor(public payload: string){}
}

export class PaginateAction implements Action {
    readonly type = PAGINATE;
    constructor(public payload: Pagination){}
}

export class PaginationDoneAction implements Action {
    readonly type = PAGINATE_DONE;
    constructor(public payload: Book[]){}
}

export type All = SearchAction | SearchDoneAction | SearchErrorAction | PaginateAction | PaginationDoneAction;