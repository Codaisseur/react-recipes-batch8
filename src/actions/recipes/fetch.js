// src/actions/recipes/fetch.js

import API from '../../api'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch({ type: 'APP_LOADING' })

    const backend = api.service('recipes')

    backend.find()
      .then((result) => {
        dispatch({ type: 'APP_DONE_LOADING' })

        dispatch({
          type: FETCHED_RECIPES,
          payload: result.data
        })
      })
      .catch((error) => {
        // error handling!
        dispatch({ type: 'APP_DONE_LOADING' })
      })
  }
}
