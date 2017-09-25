/**
 * Created by jiangyukun on 2017/5/9.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../ui/Spinner'

class ShowLoading extends React.Component {
  render() {
    if (!this.props.loaded) {
      return (
        <div>
          <Spinner/>
        </div>
      )
    }
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ShowLoading.propTypes = {
  loaded: PropTypes.bool
}

export default ShowLoading
