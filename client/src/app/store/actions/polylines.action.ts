import {Action} from '@ngrx/store';

export const ADD_POLYLINES = 'ADD_POLYLINES';

export class AddPolylines implements Action {
    readonly type = ADD_POLYLINES;
    constructor(public payload) {}
}

export type Actions = AddPolylines;