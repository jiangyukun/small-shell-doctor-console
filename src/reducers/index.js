/**
 * Created by jiangyu2016 on 16/10/15.
 */
import {fromJS} from 'immutable'
import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import systemMessage from 'app-core/message/message.reducer'

import data from './common/data.reducer'

import app from './app'
import doctorBackend from '../containers/doctor-backend/doctor-backend.reducer'

import {DOCTOR_BACKEND} from '../constants/types'

/**
 * 使用immutable，将reducer的state封装为iState，不可变数据
 * @param reducerFun 原reducer函数
 * @return 封装后的reducer函数
 */
const wrapReducerState = reducerFun => (state, action) => {
  const iState = fromJS(state)
  return unwrapReducerState(state, iState, reducerFun(iState, action))
}

function unwrapReducerState(state, iState, nextIState) {
  if (iState === nextIState) {
    return state
  }
  return nextIState.toJS()
}

export default combineReducers({
  systemMessage: wrapReducerState(systemMessage),
  app: wrapReducerState(app),

  patientList: wrapReducerState(data(DOCTOR_BACKEND.FETCH_LIST)),
  doctorBackend: wrapReducerState(doctorBackend),

  routing
})
