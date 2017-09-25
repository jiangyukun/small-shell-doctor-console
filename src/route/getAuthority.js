/**
 * Created by jiangyukun on 2017/3/16.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {showMessage, showSuccess} from 'app-core/message/message.action'

import {clearState} from '../actions/app'

export default function pageWrapper(Component) {
  class WrapAuthority extends React.Component {
    render() {
      return (
        <Component authority={{isCanEdit: true, isCanExport: true}}
                   clearState={bindActionCreators(clearState, this.context.store.dispatch)}
                   showMessage={bindActionCreators(showMessage, this.context.store.dispatch)}
                   showSuccess={bindActionCreators(showSuccess, this.context.store.dispatch)}
        />
      )
    }
  }

  WrapAuthority.contextTypes = {
    store: PropTypes.any
  }

  return WrapAuthority
}
