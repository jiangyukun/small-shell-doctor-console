/**
 * Created by jiangyukun on 2017/5/25.
 */
import React from 'react'
import PropTypes from 'prop-types'

class DeleteIcon extends React.Component {
  render() {
    return (
      <div className="delete-icon-container" onClick={this.props.onDelete}>
        <img src={require('./icon/remove.svg')}/>
      </div>
    )
  }
}

DeleteIcon.propTypes = {
  onDelete: PropTypes.func
}

export default DeleteIcon
