import * as _ from 'lodash';
import { AppActions } from './app.action';
import { IAction } from './state.model';
import { User } from './../model';

export interface IAppState {
    newUser: Array<User>;
}

export const DEFAULT_APP_STATE = {
    newUser: [{
        userName: "tcyriac",
        password1: "password"
    }],
};

/** Reducer */

export function appView (state: IAppState = DEFAULT_APP_STATE, action: IAction): IAppState {

        switch (action.type) {

        case AppActions.NEW_USER:
            return handleNewUser(state, action);

        default:
            return state;
    }
}

/** Reducer Handlers */

function handleNewUser(state: IAppState, action: IAction): IAppState {
    const newState = _.cloneDeep(state);
    console.log(newState);
    newState.newUser.push(action.payload);
    console.log(newState);
    return newState;
}
