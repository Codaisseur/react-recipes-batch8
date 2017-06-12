// src/components/Title.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Title extends PureComponent {
  render() {
    return(
      <h1 style={{ color: 'blue' }}>
        { this.props.content }
      </h1>
    )
  }
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Title
