import { baseUrl } from "../../utils/constants";
import { getRes } from "../getRes";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const getIngredients = () => {
    return function (dispatch) {
        fetch(`${baseUrl}/ingredients`)
            .then(getRes)
            .then((data) =>
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: data.data
                })
            )
    }
}