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

//通用

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const LOGOUT = 'LOGOUT'
export const CLEAR_PASSWORD_UPDATE_SUCCESS = 'CLEAR_PASSWORD_UPDATE_SUCCESS'
export const FETCH_HOSPITAL_LIST = 'FETCH_HOSPITAL_LIST'
export const UPDATE_REMARK = 'UPDATE_REMARK'
export const FETCH_POSITION_LIST = 'FETCH_POSITION_LIST'
export const FETCH_DEPARTMENT_LIST = 'FETCH_DEPARTMENT_LIST'


export const APP = generatorKeyValue('APP', {
  INIT_ACCOUNT: null
})


export const DOCTOR_BACKEND = generatorKeyValue('DOCTOR_BACKEND', {
  FETCH_LIST: null,
  UPDATE_FAMILY_PHONE: null,

})
