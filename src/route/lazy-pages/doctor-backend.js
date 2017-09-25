/**
 * Created by jiangyukun on 2017/3/17.
 */
import pageWrapper from '../getAuthority'

export default function getRoute() {
  return function node__auditing(nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('../../containers/doctor-backend/DoctorBackend').default
      cb(null, pageWrapper(Component))
    })
  }
}
