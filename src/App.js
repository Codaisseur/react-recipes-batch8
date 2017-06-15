import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecipesContainer from './recipes/RecipesContainer'
import Loading from './components/Loading'
import LoadErrorMessage from './components/LoadErrorMessage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'

import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <LoadErrorMessage />
          <Loading />
          <RecipesContainer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
