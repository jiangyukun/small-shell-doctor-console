/**
 * Created by jiangyukun on 2016/12/22.
 */
import React, {Component, PropTypes} from 'react'
import Modal from 'app-core/modal/'
import ConfirmOrClose from 'app-core/common/ConfirmOrClose'

class YesOrNoDialog extends Component {
  constructor(props) {
    super(props)
    this.originalValue = props.value
    this.state = {show: true, value: props.value || ''}
  }

  handleSelectChange = (e) => {
    this.setState({value: e.target.value})
  }

  close = () => {
    this.setState({show: false})
  }

  confirm = () => {
    this.props.updateYesOrNo(this.state.value)
  }

  componentDidUpdate() {
    if (this.props.valueUpdated) {
      this.close()
    }
  }

  render() {
    return (
      <Modal
        style={{width: '300px', marginTop: '150px'}}
        show={this.state.show}
        onHide={this.close}
        onExited={this.props.onExited}
      >
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select className="form-control" value={this.state.value} onChange={this.handleSelectChange}>
            <option value="">请选择</option>
            <option value="0">否</option>
            <option value="1">是</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <ConfirmOrClose onCancel={this.close} onConfirm={this.confirm} disabled={this.state.value == this.originalValue}/>
        </Modal.Footer>
      </Modal>
    )
  }
}

YesOrNoDialog.defaultProps = {
  title: '',
  value: ''
}

YesOrNoDialog.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueUpdated: PropTypes.bool,
  onExited: PropTypes.func.isRequired,
  updateYesOrNo: PropTypes.func.isRequired
}

export default YesOrNoDialog
