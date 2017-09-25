/**
 * Created by jiangyukun on 2016/12/23.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Upload from 'antd/lib/upload'

import * as antdUtil from '../../core/utils/antdUtil'
import * as utils from '../../core/utils'
import * as uploadUtil from '../../core/utils/uploadUtil'

class FileUpload extends React.Component {
  beforeUpload = (file) => {
    const {status, message} = utils.beforeUpload(file)
    if (status != 0) {
      antdUtil.tipErr(message)
    }
    return status == 0
  }

  customRequest = (fileInfo) => {
    uploadUtil.upload(fileInfo.file).then(url => fileInfo.onSuccess(url), err => fileInfo.onError(err))
  }

  handleChange = (info) => {
    if (info.file.status === 'done') {
      this.props.onFileUploadSuccess(info.file.response)
    } else {
      this.props.onFileUploadFailure()
    }
  }

  render() {
    return (
      <Upload className={this.props.className}
              showUploadList={false}
              beforeUpload={this.beforeUpload}
              customRequest={this.customRequest}
              onChange={this.handleChange}
      >
        {this.props.children}
      </Upload>
    )
  }
}

FileUpload.defaultProps = {
  onFileUploadFailure: () => {}
}

FileUpload.propTypes = {
  onFileUploadSuccess: PropTypes.func.isRequired,
  onFileUploadFailure: PropTypes.func
}

export default FileUpload
