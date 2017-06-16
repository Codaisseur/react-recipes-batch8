// src/actions/recipes/create.js

import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const CREATE_RECIPE = 'CREATE_RECIPE'

const api = new API()

export default (newRecipe) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.service('recipes')

    backend.create(newRecipe)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: CREATE_RECIPE,
          payload: result
        })
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
