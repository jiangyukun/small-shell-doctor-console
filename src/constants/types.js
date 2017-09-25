/**
 * Created by jiangyukun on 2016/12/1.
 */

function getActionTypeFn(prefix) {
  return function (type) {
    return prefix + '__' + type
  }
}

function generatorKeyValue(prefix, obj) {
  let newObj = {}
  let typeFn = getActionTypeFn(prefix)
  for (let key in obj) {
    newObj[key] = typeFn(key)
  }
  return newObj
}

// error
export const ADD_ERROR = 'ADD_ERROR'
export const DELETE_ERROR = 'DELETE_ERROR'

//通用
export const INIT_USERNAME = 'INIT_USERNAME'
export const INIT_ROLE_LIST = 'INIT_ROLE_LIST'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const LOGOUT = 'LOGOUT'
export const CLEAR_PASSWORD_UPDATE_SUCCESS = 'CLEAR_PASSWORD_UPDATE_SUCCESS'
export const FETCH_HOSPITAL_LIST = 'FETCH_HOSPITAL_LIST'
export const UPDATE_REMARK = 'UPDATE_REMARK'
export const FETCH_POSITION_LIST = 'FETCH_POSITION_LIST'
export const FETCH_DEPARTMENT_LIST = 'FETCH_DEPARTMENT_LIST'

// 消息
export const MARK_MESSAGE_STATE = 'MARK_MESSAGE_STATE'
export const REFRESH_LABORATORY_SHEET = 'REFRESH_LABORATORY_SHEET'
export const CLEAR_REFRESH_LABORATORY_SHEET = 'CLEAR_REFRESH_LABORATORY_SHEET'

//节点审核
export const FETCH_PATIENT_LIST = 'FETCH_PATIENT_LIST'
export const FETCH_PATIENT_INFO = 'FETCH_PATIENT_INFO'
export const UPDATE_AUDITING_STATE = 'UPDATE_AUDITING_STATE'
export const UPDATE_PATIENT_INFO = 'UPDATE_PATIENT_INFO'
export const UPDATE_VISIT_CARD = 'UPDATE_VISIT_CARD'
export const UPDATE_NODE_AUDITING_REMARK = 'UPDATE_NODE_AUDITING_REMARK'
export const UPDATE_IS_COMPLETE_VISIT = 'UPDATE_IS_COMPLETE_VISIT'

//病人编辑
export const DOCTOR_BACKEND = generatorKeyValue('DOCTOR_BACKEND', {
  FETCH_LIST: null,

})
