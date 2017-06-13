// src/recipes/RecipeItem.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'
import Pescatarian from '../images/pescatarian.svg'
import Vegetarian from '../images/vegetarian.svg'
import Vegan from '../images/vegan.svg'

chai.use(chaiEnzyme())

const recipe = {
  title: 'Spanish Omelette',
  summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
  vegan: false,
  vegetarian: true,
  pescatarian: false,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('recipe')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(recipe.title)
  })

  it('shows a 🥕  when it is vegetarian', () => {
    expect(container.find('ul > li > img')).to.have.attr('src', Vegetarian)
  })

  describe('when it is a vegan recipe', () => {
    const container = shallow(<RecipeItem { ...recipe } vegan={true} />)
    expect(container.find('ul > li > img')).to.have.attr('src', Vegan)
  })

  describe('when it is a pescatarian recipe', () => {
    const container = shallow(<RecipeItem { ...recipe } pescatarian={true} vegetarian={false} />)
    expect(container.find('ul > li > img')).to.have.attr('src', Pescatarian)
  })

  describe('when it is a neither a pescatarian nor a vegan or vegetarian recipe', () => {
    const container = shallow(<RecipeItem { ...recipe } vegetarian={false} />)
    expect(container.find('ul')).not.to.have.descendants('li')
  })
})
