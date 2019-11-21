import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as selector from './app.selectors';
import { IAppStoreState } from './state.model';
import { AppActions } from './app.action';
import { User } from './../model';

@Injectable()
export class AppService {

    constructor(
        public store: Store<IAppStoreState>,
        public actions: AppActions
    ) {
    }

    /**
     * Store Selectors
     */

    sGetNewUser() {
        return this.store.select(selector.getNewUser);
    }

    /**
    * Store Dispatchers
    */

    dNewUser(pUser: User) {
        return this.store.dispatch(this.actions.newUser(pUser));
    }

}

