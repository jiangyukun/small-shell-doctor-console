/**
 * Created by jiangyukun on 2016/10/20.
 */
import {fromJS, Map} from 'immutable'
import * as types from '../constants/types'
import * as phase from '../constants/phase'
import {APP} from '../constants/types'

const initValue = {
  name: '小贝壳控制台',
  version: '1.0',
  userId: '',
  username: '',
  pageList: [],
  account: {}
}

export default function app(iState = fromJS(initValue), action) {

  let nextIState = iState
  switch (action.type) {
    case APP.INIT_ACCOUNT:
      nextIState = nextIState.set('account', action.account)
      break
  }

  return nextIState
}
