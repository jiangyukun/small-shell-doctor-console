/**
 * Created by jiangyukun on 2017/4/10.
 */
import React, {PropTypes, Component} from 'react'
import Modal from 'app-core/modal'
import Select1 from 'app-core/common/Select1'
import ConfirmOrClose from 'app-core/common/ConfirmOrClose'

class CommonSelectDialog extends Component {
  constructor(props) {
    super()
    this.initValue = props.value
    this.state = {
      show: true,
      value: props.value
    }
  }

  selectItem = (value) => {
    this.setState({value})
  }

  close = () => {
    this.setState({show: false})
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.closeSignal && nextProps.closeSignal) {
      this.close()
    }
  }

  render() {
    return (
      <Modal
        style={{width: '350px'}}
        show={this.state.show} onHide={this.close} onExited={this.props.onExited}>
        <Modal.Header closeButton={true}>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Select1
            value={this.state.value}
            options={this.props.options}
            onChange={this.selectItem}
          />
        </Modal.Body>
        <Modal.Footer>
          <ConfirmOrClose onCancel={this.close} onConfirm={() => this.props.onConfirm(this.state.value)}/>
        </Modal.Footer>
      </Modal>
    )
  }
}

CommonSelectDialog.defaultProps = {
  value: ''
}

CommonSelectDialog.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onConfirm: PropTypes.func,
  closeSignal: PropTypes.bool,
  onExited: PropTypes.func
}

export default CommonSelectDialog
