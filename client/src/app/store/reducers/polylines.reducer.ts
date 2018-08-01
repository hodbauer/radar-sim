import { Actions, ADD_POLYLINES } from '../actions/polylines.action';

const initialState = [];

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ADD_POLYLINES:
            return action.payload;
    }
    return state;
};
