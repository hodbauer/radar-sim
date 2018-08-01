import { Actions, ADD_POINTS } from '../actions/points.action';

const initialState = [];

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ADD_POINTS:
            return action.payload;
    }
    return state;
};
