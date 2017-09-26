/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import moment from 'moment'

import {logout} from '../actions/app'
import {context} from '../core/env'

const CustomWrap = (props) => <li {...props}>{props.children}</li>

class Header extends Component {
  state = {}

  logout = () => {
    let loginUrl = context + '/login'
    if (location.href.indexOf('inline') != -1) {
      loginUrl = context + '/inline/login'
    }
    this.props.logout()
    location.href = loginUrl
  }

  componentDidMount() {
    // 每 1s 刷新当前时间显示
    this.taskId = setInterval(() => {
      this.forceUpdate()
    }, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.taskId)
  }

  render() {
    let dayHour = moment().format('HH')
    let dayPhase
    if (dayHour < 1) {
      dayPhase = '午夜'
    } else if (dayHour < 5) {
      dayPhase = '凌晨'
    } else if (dayHour < 6) {
      dayPhase = '清晨'
    } else if (dayHour < 8) {
      dayPhase = '早上'
    } else if (dayHour < 11) {
      dayPhase = '上午'
    } else if (dayHour < 13) {
      dayPhase = '中午'
    } else if (dayHour < 17) {
      dayPhase = '下午'
    } else if (dayHour < 18) {
      dayPhase = '傍晚'
    } else if (dayHour < 24) {
      dayPhase = '晚上'
    }

    const {name} = this.props.account
    return (
      <div className="app-header navbar">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">
            <i className="console-svg-icon"></i>
            <span className="console-name">{this.props.app.name}</span>
          </a>
        </div>
        <div className="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
          <ul className="nav navbar-nav navbar-right">
            <Dropdown id="dropdown-system-menu" componentClass={CustomWrap}>
              <Dropdown.Toggle useAnchor={true}>
                <span className="hidden-sm hidden-md">{`${name}，${dayPhase}好`}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu animated fadeInRight w">
                <MenuItem onClick={this.logout}>
                  重新登录
                </MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    account: state.app.account
  }
}

export default connect(mapStateToProps, {
  logout
})(Header)
