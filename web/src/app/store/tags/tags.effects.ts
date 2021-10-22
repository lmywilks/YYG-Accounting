import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { TagsService } from "src/app/services/tags.service";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import * as tagActions from "./tags.actions";

@Injectable()
export class TagsEffects {
    constructor(
        private actions$: Actions,
        private tagService: TagsService
    ) {}

    @Effect()
    Add: Observable<any> = this.actions$.pipe(
        ofType(tagActions.TagsActionType.ADD),
        map((action: tagActions.Add) => action.payload),
        switchMap((payload) => {
            return this.tagService.Create(payload)
                .pipe(
                    map((res: any) => {
                        return new tagActions.FetchSuccess(res);
                    }),
                    catchError(err => {
                        return of(new tagActions.AddFailure(err));
                    })                    
                );
        })
    );

    @Effect()
    Fetch: Observable<any> = this.actions$.pipe(
        ofType(tagActions.TagsActionType.FETCH),         
        switchMap(() => {
            return this.tagService.List()
                .pipe(
                    map((res: any) => {
                        return new tagActions.FetchSuccess(res);
                    }),
                    catchError(err => {
                        return of(new tagActions.FetchFailure(err));
                    })
                );
        })
    );
}