/**
 * Created by jiangyu2016 on 16/10/16.
 */
import {_get, _post} from '../../services/http'
import {DOCTOR_BACKEND} from '../../constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'
import {handlePatientList} from './doctor-backend.helper'

const urlPrefix = '/backend/patient'

export function fetchPatientList(option) {
  return {
    [THREE_PHASE]: {
      type: DOCTOR_BACKEND.FETCH_LIST,
      http: () => _post(urlPrefix + '/info/list', {body: option}),
      handleResponse: handlePatientList
    }
  }
}

export function updateFamilyPhone(userId, familyId, phone) {
  familyId = familyId || ''
  return {
    [THREE_PHASE]: {
      type: DOCTOR_BACKEND.UPDATE_FAMILY_PHONE,
      http: () => _get(urlPrefix + `/patient/add/familyPhone?family_phone_id=${familyId}&patient_user_id=${userId}&family_phone=${phone}`)
    }
  }
}
