import { Action } from "@ngrx/store";
import { Book } from "../models/book";

export const SEARCH = '[Books] Search';
export const SEARCH_DONE = '[Books] Search Done';
export const SEARCH_ERROR = '[Books] Search Error';

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

export type All = SearchAction | SearchDoneAction | SearchErrorAction;