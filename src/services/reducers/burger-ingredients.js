import {
    GET_INGREDIENTS_SUCCESS
} from '../actions/burger-ingredients'

export const initialState = {
    ingredients: false,
    ingredientsFailed: false,
    ingredientsRequest: false,

    constructorIngredients: [],
    currentIngredient: false,
    order: {
        ingredients: false,
        number: null
    },
}

export const burgerIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsFailed: false,
                ingredients: action.ingredients.map((ingredient) => {
                    return {
                        ingredient: ingredient,
                        qty: 0,
                    };
                }),
                ingredientsRequest: false,
            };
        }
    }
}