import {createStore} from "redux";
import {reducer} from "./reducer";

const defaultState = {};

class ReduxStore {
    constructor(){
        this._store = createStore(reducer, defaultState);
    }
}

export { ReduxStore }