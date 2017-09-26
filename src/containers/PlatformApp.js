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

class PlatformApp extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="message-container">
          <MessageManage
            messageList={this.props.msgQueue}
            changeMessageStatus={this.props.changeMessageStatus}
          />
        </div>

        <Header account={this.props.account}/>
        <Aside/>
        <AppContent>
          {this.props.children}
        </AppContent>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    account: state.app.account,
    msgQueue: state.systemMessage.msgQueue
  }
}

export default connect(mapStateToProps, {changeMessageStatus})(PlatformApp)
