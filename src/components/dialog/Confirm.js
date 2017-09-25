/**
 * Created by jiangyukun on 2017/5/6.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'app-core/modal'

import ConfirmOrClose from './ConfirmOrClose'

class Confirm extends React.Component {
  closeType = ''
  state = {
    show: true
  }

  close = () => {
    this.setState({show: false})
  }

  handleConfirm = () => {
    this.closeType = 'confirm'
    this.close()
  }

  handleCancel = () => {
    this.closeType = 'cancel'
    this.close()
  }

  handleExited = () => {
    if (this.props.onExited) {
      this.props.onExited()
    }
    if (this.props.onCancel) {
      this.props.onCancel()
    }
    if (this.closeType == 'confirm') {
      this.props.onConfirm()
    }
  }

  render() {
    return (
      <Modal
        style={{width: '400px'}}
        onHide={this.close}
        show={this.state.show}
        onExited={this.handleExited}
      >
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {
            this.props.message && (
              <div style={{fontSize: '14px'}}>
                {this.props.message}
              </div>
            )
          }
          {
            !this.props.message && this.props.children
          }
        </Modal.Body>

        <Modal.Footer>
          <ConfirmOrClose onCancel={this.handleCancel} onConfirm={this.handleConfirm}/>
        </Modal.Footer>
      </Modal>
    )
  }
}

Confirm.defaultProps = {
  title: '提示'
}

Confirm.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  onExited: PropTypes.func,
  onCancel: PropTypes.func
}

export default Confirm
