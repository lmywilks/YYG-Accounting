import { TagsActionType, ActionsUnion } from "./tags.actions";

export interface TagState {
    isLoading: boolean;
    add_success: boolean;
    tags: any
}

export const initialTagState: TagState = {
    isLoading: false,
    add_success: false,
    tags: []
}

export function tagReducer(state = initialTagState, action: ActionsUnion): TagState {
    const cloneState = Object.assign({}, state);

    switch (action.type) {
        case TagsActionType.ADD_SUCCESS:
            cloneState.add_success = true;
            cloneState.tags.push(action.payload.tag);
            return cloneState;
        case TagsActionType.ADD_FAILURE:
            cloneState.add_success = false;
            return cloneState;
        case TagsActionType.FETCH_SUCCESS:
            cloneState.tags = action.payload;
            return cloneState;
        default:
            return cloneState;
    }
}