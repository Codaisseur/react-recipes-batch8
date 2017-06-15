import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './LoadErrorMessage.css'

class LoadErrorMessage extends PureComponent {
  static propTypes = {
    error: PropTypes.bool,
    message: PropTypes.string.isRequired,
  }

  render() {
    const { error, message } = this.props

    if (!error) return null

    return (
      <p className="LoadErrorMessage">{ message }</p>
    )
  }
}

const mapStateToProps = ({ loadError }) => ({
  error: !!loadError,
  message: loadError || '',
})

export default connect(mapStateToProps)(LoadErrorMessage)
