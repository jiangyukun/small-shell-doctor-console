/**
 * Created by jiangyukun on 2016/10/21.
 */
import React, {Component, Children, PropTypes} from 'react'
import Modal from 'app-core/modal/'
import Button1 from 'app-core/button/Button1'
import FullDialogContent from 'app-core/common/content/FullDialogContent'

export default class ImagePreview extends Component {
  state = {
    show: true,
    width: 0,
    angle: 0,
    showReset: false
  }

  close = () => {
    this.setState({show: false})
  }

  zoomIn = () => {
    this.setState({width: this.state.width * 1.2, showReset: true})
  }

  zoomOut = () => {
    this.setState({width: this.state.width * 0.8, showReset: true})
  }

  rotate = () => {
    this.setState({angle: this.state.angle + 90, showReset: true})
  }

  reset = () => {
    this.setState({width: this._img.naturalWidth, angle: 0, showReset: false})
  }

  componentDidMount() {
    if (this._img) {
      this._img.onload = () => {
        this.setState({width: this._img.naturalWidth, angle: 0, showReset: false})
      }
    }
  }

  render() {
    let toolButtons = [], contents = []
    Children.forEach(this.props.children, child => {
      if (!child) return
      if (child.type == ToolButton) {
        toolButtons.push(child)
      } else {
        contents.push(child)
      }
    })

    const imageStyle = {
      transform: 'rotate(' + this.state.angle + 'deg)'
    }
    if (this.state.width) {
      imageStyle.width = this.state.width
    }

    return (
      <Modal
        contentComponent={FullDialogContent}
        show={this.state.show}
        onHide={this.close}
        onExited={this.props.onExited}
      >
        <Modal.Header closeButton={true}></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            {
              !this.props.url && this.props.showEmptyText && (
                <div>暂无图片</div>
              )
            }
            {
              this.props.url && (
                <img ref={ c => this._img = c} src={this.props.url} style={imageStyle}/>
              )
            }
            {contents && contents}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="ngdialog-buttons">
            <div className="pull-left">
              {this.props.url && <input type="button" className="btn toolbar-btn" onClick={this.zoomIn} value="放大"/>}
              {this.props.url && <input type="button" className="btn toolbar-btn" onClick={this.zoomOut} value="缩小"/>}
              {this.props.url && <input type="button" className="btn toolbar-btn" onClick={this.rotate} value="旋转"/>}
              {this.state.showReset && <input type="button" className="btn toolbar-btn reset" onClick={this.reset} value="还原"/>}
            </div>
            {toolButtons && toolButtons}
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

ImagePreview.defaultProps = {
  showEmptyText: true,
  showCloseButton: true
}

ImagePreview.propTypes = {
  url: PropTypes.string,
  onExited: PropTypes.func,

  showEmptyText: PropTypes.bool,
  showCloseButton: PropTypes.bool
}

class ToolButton extends Component {
  render() {
    return this.props.children
  }
}

ImagePreview.ToolButton = ToolButton
