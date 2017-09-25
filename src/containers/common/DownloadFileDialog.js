/**
 * 通用的文件下载对话框
 * Created by jiangyukun on 2017/1/6.
 */
import React, {Component, PropTypes} from 'react'
import Modal from 'app-core/modal'
import Select1 from 'app-core/common/Select1'

class DownloadFileDialog extends Component {
  state = {
    show: true,
    downloadUrl: ''
  }

  selectItem = (value) => {
    this.setState({downloadUrl: value})
  }

  downloadExcel = () => {
    window.open(this.state.downloadUrl)
  }

  render() {
    return (
      <Modal
        style={{width: '400px', marginTop: '150px'}}
        show={this.state.show} onHide={() => this.setState({show: false})} onExited={this.props.onExited} backdrop="static">
        <Modal.Header closeButton={true}>
          <Modal.Title>文件列表</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Select1 value={this.state.downloadUrl} options={this.props.fileList} onChange={this.selectItem}/>
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <div className="col-xs-6">
              <input type="button" className="btn btn-success btn-block" value="下载"
                     disabled={!this.state.downloadUrl}
                     onClick={this.downloadExcel}/>
            </div>
            <div className="col-xs-6">
              <input type="button" className="btn btn-default btn-block" onClick={() => this.setState({show: false})} value="取消"/>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

DownloadFileDialog.propTypes = {
  fileList: PropTypes.array,
  onExited: PropTypes.func
}

export default DownloadFileDialog
