import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { TagState } from "./tags.reducers";

export const selectTagState = createFeatureSelector<AppState, TagState>('tag');

export const getTags = createSelector(selectTagState, (state: TagState) => state.tags);

export const getAddSuccess = createSelector(selectTagState, (state: TagState) => state.add_success);
