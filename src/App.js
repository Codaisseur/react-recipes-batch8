import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import Loading from './components/Loading'
import LoadErrorMessage from './components/LoadErrorMessage'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadErrorMessage />
        <Loading />
        <RecipesContainer />
      </div>
    )
  }
}

export default App
