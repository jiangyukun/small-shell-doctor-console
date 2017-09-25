/**
 * Created by jiangyukun on 2017/5/12.
 */
// const appHost = 'http://mobi.vongihealth.com:85'
const appHost = 'http://192.168.3.19:8088'
// const appHost = 'http://localhost:9999'

export default {
  completeMedicineRecords: appHost + '/frontend/complete-medicine-records/mother',
  babyCompleteMedicineRecords: appHost + '/frontend/complete-medicine-records/baby',
  babyIdList: appHost + '/frontend/archives/patient/queryMyPatientBabyIdList/'
}
