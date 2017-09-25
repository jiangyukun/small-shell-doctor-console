/**
 * Created by jiangyukun on 2017/2/6.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Button extends React.Component {
  render() {
    return (
      <button className={classnames('btn btn-sm', this.props.className)} {...this.props}/>
    )
  }
}

Button.propTypes = {
  className: PropTypes.string
}

export default Button
