/**
 * Created by jiangyukun on 2016/12/2.
 */
export function handlePatientList(data) {
  return {
    total: data['count'],
    list: data['list']
  }
}
