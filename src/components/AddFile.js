/**
 * Created by jiangyukun on 2017/5/10.
 */
import React from 'react'
import PropTypes from 'prop-types'

let uid = 0

function getUid() {
  return '__upload__' + uid++
}

class AddFile extends React.Component {
  static defaultProps = {
    accept: '*'
  }

  state = {
    uid: getUid()
  }

  handleClick = () => {
    this._file.click()
  }

  onChange = (e) => {
    const files = e.target.files
    if (files[0]) {
      this.props.onFileChange(files)
    }
    this.setState({uid: getUid()})
  }

  render() {
    return (
      <span>
        <div style={{display: 'inline-block'}} onClick={this.handleClick}>
          <input ref={c => this._file = c}
                 key={this.state.uid}
                 type="file"
                 accept={this.props.accept}
                 style={{display: 'none'}}
                 onChange={this.onChange}
          />
          {this.props.children}
        </div>
      </span>
    )
  }
}

AddFile.propTypes = {
  accept: PropTypes.string,
  onFileChange: PropTypes.func
}

export default AddFile
