import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

import { Ingredient } from 'src/app/shared/ingredient.model';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;

    constructor( public payload: Ingredient) {}
}
