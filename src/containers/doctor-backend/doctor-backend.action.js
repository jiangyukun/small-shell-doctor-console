/**
 * Created by jiangyu2016 on 16/10/16.
 */
import {GET, POST, PATCH} from '../../services/http'
import {DOCTOR_BACKEND} from '../../constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'
import {handlePatientList} from './doctor-backend.helper'

export function fetchPatientList(option) {
  let urlPrefix = '/backend/patient'

  return {
    [THREE_PHASE]: {
      type: DOCTOR_BACKEND.FETCH_LIST,
      http: () => POST(urlPrefix + '/info/list', {body: option}),
      handleResponse: handlePatientList
    }
  }
}
