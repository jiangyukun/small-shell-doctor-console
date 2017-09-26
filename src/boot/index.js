/**
 * Web App 启动代码
 */
import 'babel-polyfill'
import 'isomorphic-fetch'

import React from 'react'
import {render} from 'react-dom'
import {useRouterHistory} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {syncHistoryWithStore} from 'react-router-redux'

import Root from '../containers/Root'
import configureStore from '../store/configureStore'

import './import-style'
import {context} from '../core/env'
import {_get} from '../services/http'
import {APP} from '../constants/types'

let path
switch (process.env.NODE_ENV) {
  case 'dev':
    path = '/'
    break

  case 'inline':
  case 'test':
  case 'production':
    path = context
    break

  default:
    throw new Error('illegal NODE_ENV value!')
}

let store = configureStore()
let browserHistory = syncHistoryWithStore(useRouterHistory(createBrowserHistory)({basename: path}), store)

_get('/backend/user/getBackendUserInfo').then(data => {
  store.dispatch({
    type: APP.INIT_ACCOUNT,
    account: {
      id: data['doctor_user_id'],
      name: data['doctor_name']
    }
  })
})

render(
  <Root pageList={[]} store={store} history={browserHistory}/>,
  document.getElementById('root')
)
