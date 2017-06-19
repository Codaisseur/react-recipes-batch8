import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const TOGGLE_LIKE_RECIPE = 'TOGGLE_LIKE_RECIPE'

const api = new API()

export default (recipe) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const recipes = api.service('recipes')

    recipes.patch(recipe._id, { liked: !recipe.liked })
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
