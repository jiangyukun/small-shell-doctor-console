/**
 * Created by jiangyukun on 2017/5/6.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'app-core/modal'

class Alert extends React.Component {
  state = {
    show: true
  }

  close = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <Modal
        style={{width: '400px'}}
        onHide={this.close}
        show={this.state.show}
        onExited={this.props.onConfirm}
      >
        <Modal.Header>{this.props.title}</Modal.Header>

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
          <button className="btn btn-block btn-success" onClick={this.close}>确定</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

Alert.defaultProps = {
  title: '提示'
}

Alert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func
}

export default Alert
