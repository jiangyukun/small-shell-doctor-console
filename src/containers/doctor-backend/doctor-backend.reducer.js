/**
 * Created by jiangyukun on 2016/12/1.
 */
import {fromJS, List} from 'immutable'
import * as types from '../../constants/types'
import * as phase from '../../constants/phase'
import {DOCTOR_BACKEND} from '../../constants/types'
import {handleFlagState} from '../common/common-helper'

const defaultValue = {
  updateFamilyPhoneSuccess: false
}

export default function doctorBackend(iState = fromJS(defaultValue), action) {
  let nextIState = iState

  switch (action.type) {

  }
  nextIState = handleFlagState(nextIState, action, DOCTOR_BACKEND.UPDATE_FAMILY_PHONE, 'updateFamilyPhoneSuccess')
  return nextIState
}
