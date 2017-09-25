/**
 * Created by jiangyukun on 2017/5/8.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../element/Button'

class ConfirmOrClose extends React.Component {
  static defaultProps = {
    disabled: false,
    okBtnName: '确定'
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6">
          <button className="btn btn-block btn-default" onClick={this.props.onCancel}>
            取消
          </button>
        </div>
        <div className="col-xs-6">
          <Button className="btn btn-block btn-info" onClick={this.props.onConfirm} disabled={this.props.disabled}>
            {this.props.okBtnName}
          </Button>
        </div>
      </div>
    )
  }
}

ConfirmOrClose.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  disabled: PropTypes.bool,
  okBtnName: PropTypes.string
}

export default ConfirmOrClose
