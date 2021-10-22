import { Action } from '@ngrx/store';

export enum TagsActionType {
    ADD = '[Tags] Add',
    ADD_SUCCESS = '[Tags] Add Success',
    ADD_FAILURE = '[Tags] Add Failure',
    FETCH = '[Tags] Fetch',
    FETCH_SUCCESS = '[Tags] Fetch Success',
    FETCH_FAILURE = '[Tags] Fetch Failure',
    UPDATE = '[Tags] Update',
    DELETE = '[Tags] Delete'
}

export class Add implements Action {
    readonly type = TagsActionType.ADD;
    constructor(public payload: any) {}
}

export class AddSuccess implements Action {
    readonly type = TagsActionType.ADD_SUCCESS;
    constructor(public payload: any) {}
}

export class AddFailure implements Action {
    readonly type = TagsActionType.ADD_FAILURE;
    constructor(public payload: any) {}
}

export class Fetch implements Action {
    readonly type = TagsActionType.FETCH;
    constructor() {}
}

export class FetchSuccess implements Action {
    readonly type = TagsActionType.FETCH_SUCCESS;
    constructor(public payload: any) {}
}

export class FetchFailure implements Action {
    readonly type = TagsActionType.FETCH_FAILURE;
    constructor(public payload: any) {}
}

export class Update implements Action {
    readonly type = TagsActionType.UPDATE;
    constructor(public payload: any) {}
}


export class Delete implements Action {
    readonly type = TagsActionType.DELETE;
    constructor(public payload: any) {}
}

export type ActionsUnion = 
    Add |
    AddSuccess |
    AddFailure |
    Fetch |
    FetchSuccess |
    FetchFailure |
    Update |
    Delete;