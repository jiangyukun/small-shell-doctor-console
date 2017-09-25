/**
 * 页面整体结构
 * Created by jiangyukun on 16/10/15.
 */
import React from 'react'
import {connect} from 'react-redux'
import MessageManage from 'app-core/message'
import {changeMessageStatus} from 'app-core/message/message.action'

import Header from './Header'
import Aside from './Aside'
import AppContent from './AppContent'
import Message from './Message'

import {getIsCanEdit} from '../constants/authority'
import {appPageNames} from '../constants/nav'
import * as antdUtil from '../core/utils/antdUtil'
import {deleteErr} from '../actions/app'

class PlatformApp extends React.Component {
  componentDidUpdate() {
    const {errQueue} = this.props.app
    if (errQueue.length != 0) {
      errQueue.forEach(errInfo => {
        antdUtil.tipErr(errInfo.err)
        this.props.deleteErr(errInfo.errId)
      })
    }
  }

  render() {
    let app = this.props.app
    let isCanEdit = getIsCanEdit(this.props.pageList, appPageNames.laboratorySheet)

    return (
      <div className="app">
        <div className="message-container">
          <MessageManage
            messageList={this.props.msgQueue}
            changeMessageStatus={this.props.changeMessageStatus}
          />
        </div>

        <Header isCanEdit={isCanEdit}/>
        <Aside pageList={this.props.pageList}/>
        <AppContent>
          {this.props.children}
        </AppContent>
        {
          isCanEdit && (
            <Message/>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    pageList: state.app.pageList,
    msgQueue: state.systemMessage.msgQueue
  }
}

export default connect(mapStateToProps, {deleteErr, changeMessageStatus})(PlatformApp)
