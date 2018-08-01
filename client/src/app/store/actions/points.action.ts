import {Action} from '@ngrx/store';

export const ADD_POINTS = 'ADD_POINTS';

export class AddPoints implements Action {
    readonly type = ADD_POINTS;
    constructor(public payload) {}
}

export type Actions = AddPoints;