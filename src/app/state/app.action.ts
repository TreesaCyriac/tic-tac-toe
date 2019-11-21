import { Injectable } from '@angular/core';

import { ActionCreatorFactory } from './action-creator.utils';

@Injectable()
export class AppActions {

    /** ActionsList */

    static NEW_USER    = '[App] NEW_USER';

    newUser            = ActionCreatorFactory.create!(AppActions.NEW_USER);

}
