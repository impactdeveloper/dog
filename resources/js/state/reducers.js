import * as types from './types'
import { fromJS, Map } from "immutable";


const BREED_REDUCRES = {
    [types.API_LIST_BREEDS_SUCCESS]: (state, payload) => {
        let newState = state;
        const { breeds } = payload;
        return newState.setIn(
            ["breeds"],
            fromJS(breeds)
        );
    },
    [types.API_LIST_BREED_IMAGES_SUCCESS]: (state, payload) => {
        let newState = state;
        const { breedimages } = payload;
        return newState.setIn(
            ["breedImages"],
            fromJS(breedimages)
        );
    }
}

function settingsReducers(state = Map(), action) {
    const reducer = BREED_REDUCRES[action.type];
    if (reducer) {
        return reducer(state, action);
    }
    return state;
}

const reducers = {
    app: settingsReducers,
};

export default reducers;
