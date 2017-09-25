/**
 * Created by jiangyukun on 2016/12/1.
 */
import {fromJS, List} from 'immutable'
import * as types from '../../constants/types'
import * as phase from '../../constants/phase'

const defaultValue = {total: 0, list: [], loading: false}

export default function doctorBackend(iState = fromJS(defaultValue), action) {
  let nextIState = iState

  switch (action.type) {

  }

}
