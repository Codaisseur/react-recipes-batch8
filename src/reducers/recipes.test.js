// src/reducers/recipes.test.js

import { expect } from 'chai'
import reducer from './recipes'
import seedData from '../seeds/recipes'

describe('recipes reducer', () => {
  const initialState = seedData

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
