import { IAppStoreState } from './state.model';

export function getNewUser(state: IAppStoreState) {
    const newUser = state.appView.newUser;
    return newUser;
}
