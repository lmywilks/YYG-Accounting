import { ActionReducerMap } from "@ngrx/store";
import * as fromTag from './tags';
import * as fromAuth from './auth';

export interface AppState {
    tag: fromTag.TagState,
    auth: fromAuth.AuthState
}

export const reducers: ActionReducerMap<AppState, any> = {
    tag: fromTag.tagReducer,
    auth: fromAuth.authReducer
};

export const effects = [
    fromTag.TagsEffects,
    fromAuth.AuthEffects
]