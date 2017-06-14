// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.css'
import RecipeEditor from './RecipeEditor'

export class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe }  />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
        </header>

        <main>
          <RecipeEditor />

          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps)(RecipesContainer)
