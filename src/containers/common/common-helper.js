import * as phase from '../../constants/phase'

export function handleListData(responseData) {
  const {data, loading, loaded} = responseData
  let total = 0, list = []
  if (data) {
    total = data.total
    list = data.list
  }
  return {total, list, loading, loaded}
}

export function v_t(value, text) {
  return {
    value, text
  }
}


export function handleFlagState(iState, action, type, key) {
  if (action.type == phase.CLEAR + type) {
    return iState.set(key, false)
  }
  if (action.type == type + phase.SUCCESS) {
    return iState.set(key, true)
  }
  return iState
}
