// src/reducers/recipes.js
import { FETCHED_RECIPES } from '../actions/recipes/fetch'
import { TOGGLE_LIKE_RECIPE } from '../actions/recipes/toggleLike'
import { CREATE_RECIPE } from '../actions/recipes/create'

const generateNewId = (recipes) => {
  return recipes.sort((a, b) => (b._id - a._id))[0]._id + 1
}

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_RECIPES :
      return [ ...payload ]

    case CREATE_RECIPE :
      return [{ ...payload, _id: generateNewId(state) }].concat(state)

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
