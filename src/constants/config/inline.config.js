/**
 * Created by jiangyukun on 2017/5/12.
 */
const appHost = 'http://localhost:8080'
// const appHost = 'http://mobi.vongihealth.com:85'

export default {
  completeMedicineRecords: appHost + '/frontend/complete-medicine-records/mother',
  babyCompleteMedicineRecords: appHost + '/frontend/complete-medicine-records/baby',
  babyIdList: appHost + '/frontend/archives/patient/queryMyPatientBabyIdList/'
}
