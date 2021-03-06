// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.css'
import fetchRecipes from '../actions/recipes/fetch'
import subscribeToRecipesService from '../actions/recipes/subscribe'
import CreateRecipeButton from './CreateRecipeButton'
import Search from './Search'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchRecipes()
    this.props.subscribeToRecipesService()
  }

  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe }  />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
          <CreateRecipeButton />
        </header>

        <main>
          <Search />

          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps, {
  fetchRecipes, subscribeToRecipesService
})(RecipesContainer)
