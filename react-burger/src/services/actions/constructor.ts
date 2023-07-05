import {
    IAddIngredient,
    IIngredient,
    IDeleteIngredient
} from "../types/data";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS';
export const REORDER_INGREDIENT = 'REORDER_INGREDIENT';

export const addIngredient = (
    ingredientId: string,
    ingredient: IIngredient
): IAddIngredient => {
    return {
        type: ADD_INGREDIENT,
        number: ingredientId,
        payload: ingredient,
    };
};

export const deleteIngredient = (
    ingredientUniqId: any
): IDeleteIngredient => {
    return {
        type: DELETE_INGREDIENT,
        payload: ingredientUniqId,
    };
};