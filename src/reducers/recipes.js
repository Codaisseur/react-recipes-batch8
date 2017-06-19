// src/reducers/recipes.js
import { FETCHED_RECIPES } from '../actions/recipes/fetch'
import { TOGGLE_LIKE_RECIPE } from '../actions/recipes/toggleLike'
import {
  RECIPE_CREATED,
  RECIPE_UPDATED,
  RECIPE_REMOVED
} from '../actions/recipes/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_RECIPES :
      return [ ...payload ]

    case RECIPE_CREATED :
      const newRecipe = { ...payload }
      return [newRecipe].concat(state)

    case RECIPE_UPDATED :
      return state.map((recipe) => {
        if (recipe._id === payload._id) {
          return { ...payload }
        }
        return recipe
      })

    case RECIPE_REMOVED :
        return state.filter((recipe) => (recipe._id !== payload._id))

    case TOGGLE_LIKE_RECIPE :
      return state.map((recipe) => {
        if (recipe._id === payload) {
          return { ...recipe, liked: !recipe.liked }
        }

        return recipe
      })

    default :
      return state

  }
}
