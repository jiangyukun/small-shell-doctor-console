/**
 * Created by jiangyukun on 2016/11/27.
 */
import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
import Select1 from 'app-core/common/Select1'

class SubOptions extends Component {
  constructor(props, context) {
    super(props, context)
    context.addSubItem(this)
    this.state = {
      active: false,
      value: ''
    }
  }

  // FilterItem 调用的方法(onChange, getParam)

  onChange(typeItem) {
    if (typeItem.value) {
      this.setState({active: true, value: ''})
    } else {
      this.setState({active: false, value: ''})
    }
  }

  getParam() {
    if (!this.lastOption) {
      return {}
    }
    let {text, value} = this.lastOption
    return {
      [this.props.paramName]: this.props.useText ? text : value
    }
  }

  // ------------------------------------

  selectOption = (value) => {
    const option = this.props.options.find(o => o.value == value)
    const text = option.text
    this.lastOption = option
    this.context.selectSubItem(`，${this.props.title}：` + text, value, text)
    this.setState({value})
  }

  reset() {
    this.setState({active: false, value: ''})
    this.lastOption = null
  }

  render() {
    return (
      <div className={classnames('custom-item-wrap', {'hidden': !this.state.active})}>
        {this.props.title}：
        <span style={{width: '150px', display: 'inline-block'}}>
                    <Select1 value={this.state.value}
                             options={this.props.options}
                             onChange={this.selectOption}/>
                </span>
      </div>
    )
  }
}

SubOptions.defaultProps = {
  options: []
}

SubOptions.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  paramName: PropTypes.string,
  useText: PropTypes.bool
}

SubOptions.contextTypes = {
  selectSubItem: PropTypes.func,
  addSubItem: PropTypes.func
}

export default SubOptions
