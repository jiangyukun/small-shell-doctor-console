/**
 * Created by jiangyukun on 2017/5/22.
 */

import phase from '../constants/phase'

export function handleClear(action, targetType, key, iState) {
  if (action.type == phase.CLEAR + targetType) {
    return iState.set(key, false)
  }
  return iState
}

export function handleFlag(action, targetType, key, iState) {
  if (action.type == targetType + phase.SUCCESS) {
    return iState.set(key, true)
  }
  if (action.type == phase.CLEAR + targetType) {
    return iState.set(key, false)
  }
  return iState
}
