/**
 * Created by jiangyukun on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react'
import Modal from 'app-core/modal/'
import ConfirmOrClose from 'app-core/common/ConfirmOrClose'
import RemarkDialogContent from './content/RemarkDialogContent'

class EditRemark extends Component {
  constructor(props) {
    super(props)
    this.originalValue = props.value
    this.state = {
      show: true,
      showConfirm: false,
      value: props.value || ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  close = () => {
    this.setState({show: false})
  }

  confirm = () => {
    this.props.updateRemark(this.state.value)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.remarkUpdated && nextProps.remarkUpdated) {
      this.close()
    }
  }

  render() {
    return (
      <Modal
        contentComponent={RemarkDialogContent}
        show={this.state.show} onHide={this.close} onExited={this.props.onExited}>

        <Modal.Header closeBtn={true}>
          <Modal.Title>修改备注</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <textarea className="form-control" rows={5} value={this.state.value} onChange={this.handleChange}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <ConfirmOrClose
            onCancel={this.close}
            onConfirm={this.confirm}
            disabled={this.state.value == this.originalValue}
          />
        </Modal.Footer>
      </Modal>
    )
  }
}

EditRemark.defaultProps = {
  value: ''
}

EditRemark.propTypes = {
  value: PropTypes.string,
  onExited: PropTypes.func.isRequired,
  updateRemark: PropTypes.func.isRequired,
  remarkUpdated: PropTypes.bool
}

export default EditRemark
