// src/reducers/recipes.js
import recipes from '../seeds/recipes'
import { TOGGLE_LIKE_RECIPE } from '../actions/recipes/toggleLike'

export default (state = recipes, { type, payload } = {}) => {
  switch (type) {
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
