/**
 * Created by jiangyukun on 2017/5/10.
 */
import React from 'react'
import PropTypes from 'prop-types'

class UpdateOrDelete extends React.Component {
  static defaultProps = {
    disable: false
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6">
          <button className="btn btn-block btn-danger" onClick={this.props.onDelete}>
            删除
          </button>
        </div>
        <div className="col-xs-6">
          <button className="btn btn-block btn-info" onClick={this.props.onUpdate} disabled={this.props.disable}>
            更新
          </button>
        </div>
      </div>
    )
  }
}

UpdateOrDelete.propTypes = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}

export default UpdateOrDelete
