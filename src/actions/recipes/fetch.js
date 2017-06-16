// src/actions/recipes/fetch.js

import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()

export default ({ query, type } = {}) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.service('recipes')

    let search = { query: {}, collation: { locale: 'en' } }

    if (query) {
      const regex = { $regex: query, $options: 'i' }
      search.query = {
        $or: [
          { title: regex },
          { summary: regex },
          { 'cookingSteps.title': regex },
          { 'cookingSteps.description': regex },
          { 'ingredients.name': regex },
        ]
      }
    }

    if (type && type !== 'any') {
      search.query[type] = true
    }

    console.log(search)

    api.app.authenticate()
      .then(() => {
        backend.find(search)
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: FETCHED_RECIPES,
              payload: result.data
            })
          })
          .catch((error) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })
      .catch((error) => {
        backend.find(search)
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: FETCHED_RECIPES,
              payload: result.data
            })
          })
          .catch((error) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })
  }
}
