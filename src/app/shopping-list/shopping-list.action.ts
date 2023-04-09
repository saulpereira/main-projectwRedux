import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

import { ADD_INGREDIENT } from './shopping-list.actions';

export class AddIngredient implement Action {
    readonly type = ADD_INGREDIENT;
    payload: Ingredient;
}
