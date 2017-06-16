import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import loadingImage from '../images/loading.gif'
import './Loading.css'

class Loading extends PureComponent {
  static propTypes = {
    ready: PropTypes.bool,
  }

  render() {
    if (this.props.ready) return null

    return (
      <div className="Loading">
        <img src={loadingImage} alt="Loading..." />
        <p>Loading...</p>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ ready: !loading })

export default connect(mapStateToProps)(Loading)
