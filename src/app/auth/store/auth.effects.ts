import { Actions, ofType } from '@ngrx/effects';

import * as AuthActions from './auht.actions';

export class AuthEffects {
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START)
    );

    constructor(private actions$: Actions) {}
}