// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LikeButton from '../components/LikeButton'
import RecipeCategory from './RecipeCategory'
import './RecipeItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    liked: PropTypes.bool,
    toggleLike: PropTypes.func.isRequired,
  }

  toggleLike() {
    const { _id } = this.props
    this.props.toggleLike(_id)
    console.log('RecipeItem:', _id)
  }

  render() {
    const {
      title,
      summary,
      vegan,
      vegetarian,
      pescatarian,
      photo,
      liked,
    } = this.props

    const categories = { vegan, vegetarian, pescatarian }

    return(
      <article className="recipe">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
          <h1>{ title }</h1>
          <ul className="categories">
            <RecipeCategory { ...categories } />
          </ul>
        </header>
        <main>
          <p>{ summary }</p>
        </main>
        <footer>
          <LikeButton
            liked={liked}
            onChange={this.toggleLike.bind(this)} />
        </footer>
      </article>
    )
  }
}

export default RecipeItem