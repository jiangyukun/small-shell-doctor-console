/**
 * Created by jiangyukun on 2016/11/29.
 */
import {_get} from '../services/http'
import * as types from '../constants/types'
import phase from '../constants/phase'
import {THREE_PHASE} from '../middleware/request_3_phase'

export function logout() {
  return {
    [THREE_PHASE]: {
      type: types.LOGOUT,
      http: () => _get(`/backend/user/logout`)
    }
  }
}

export function clearState(type) {
  return {
    type: phase.CLEAR + type
  }
}
