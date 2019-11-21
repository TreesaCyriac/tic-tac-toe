import {Action} from '@ngrx/store';

import { IAppState } from './app.reducer';

export class IAction implements Action {
    type: '';
    payload?: any;
}

export interface IAppStoreState {
    appView: IAppState;
}
