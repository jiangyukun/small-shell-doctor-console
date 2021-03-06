/**
 * Created by jiangyukun on 2017/3/14.
 */
import {getPath} from '../core/utils'

export const appPageNames = {
  nodeAuditing: 'node-auditing',
  patientEdit: 'patient-edit',
  laboratorySheet: 'laboratory-sheet',
  takeMedicineRecord: 'take-medicine-record',
  patientRecordInfo: 'patient-record-info',

  doctorAuditing: 'doctor-auditing',
  outPatientTime: 'out-patient-time',
  todoWorkTrack: 'todo-work-track',
  hospitalManage: 'hospital-manage',

  smartAnalyticSystem: 'smart-analytic-system',
  appUpdate: 'app-update',
  sliderManage: 'slider-manage',
  knowledgeBase: 'knowledge-base',
  chatGroupManage: 'chat-group-manage',

  historyMessage: 'history-message',
  patientSituationStatistics: 'patient-situation-statistics',
  hospitalAssayReport: 'hospital-assay-report',
  doctorComprehensiveScore: 'doctor-comprehensive-score',
  enrollmentSituation: 'enrollment-situation',
  onlineDoctor: 'online-doctor',
  dataMonthlyReport: 'data-monthly-report',

  smsManage: 'sms-manage',
  chatSystem: 'chat-system',
  consoleAccountManage: 'console-account-manage',
  authorityRoleManage: 'authority-role-manage',
  hospitalAuthorityManage: 'hospital-authority-manage'

}

const nodeAuditing = getPath('node-auditing') // 节点审核
const patientEdit = getPath('patient-edit') // 病人编辑
const laboratorySheet = getPath('laboratory-sheet') // 化验单查看
const takeMedicineRecord = getPath('take-medicine-record') // 服药记录
const patientRecordInfo = getPath('patient-record-info') // 患者录入信息

const doctorAuditing = getPath('doctor-auditing') // 医生审核
const outPatientTime = getPath('out-patient-time') // 医生门诊时间
const todoWorkTrack = getPath('todo-work-track') // 医生门诊时间
const hospitalManage = getPath('hospital-manage') // 医院管理

const smartAnalyticSystem = getPath('smart-analytic-system') // 智能分析系统
const appUpdate = getPath('app-update') // APP更新
const sliderManage = getPath('slider-manage') // 轮播图
const knowledgeBase = getPath('knowledge-base') // 知识库
const chatGroupManage = getPath('chat-group-manage') // 聊天群组管理

const historyMessage = getPath('history-message') // 历史记录报表
const patientSituationStatistics = getPath('patient-situation-statistics') //病人情况统计
const hospitalAssayReport = getPath('hospital-assay-report') // 中心验单情况表
const doctorComprehensiveScore = getPath('doctor-comprehensive-score') // 医生综合评分
const enrollmentSituation = getPath('enrollment-situation') // 入组情况统计
const onlineDoctor = getPath('online-doctor') // 在线医生评分
const dataMonthlyReport = getPath('data-monthly-report') // 数据月报

const smsManage = getPath('sms-manage') // 短信
const chatSystem = getPath('chat-system') // 聊天系统
const consoleAccountManage = getPath('console-account-manage') // 后台账号管理
const authorityRoleManage = getPath('authority-role-manage') // 权限分组管理
const hospitalAuthorityManage = getPath('hospital-authority-manage') // 医院权限管理

export const PATIENT_CATEGORY = '-PATIENT-'
export const DOCTOR_CATEGORY = '-DOCTOR-'
export const APP_CATEGORY = '-APP-'
export const STATISTICS_CATEGORY = '-STATISTICS-'
export const SYSTEM_CATEGORY = '-SYSTEM-'

export const pageCategoryMapper = {
  'node-auditing': PATIENT_CATEGORY,
  'patient-edit': PATIENT_CATEGORY,
  'laboratory-sheet': PATIENT_CATEGORY,
  'take-medicine-record': PATIENT_CATEGORY,
  'patient-record-info': PATIENT_CATEGORY,

  'doctor-auditing': DOCTOR_CATEGORY,
  'out-patient-time': DOCTOR_CATEGORY,
  'todo-work-track': DOCTOR_CATEGORY,
  'hospital-manage': DOCTOR_CATEGORY,

  'smart-analytic-system': APP_CATEGORY,
  'app-update': APP_CATEGORY,
  'slider-manage': APP_CATEGORY,
  'knowledge-base': APP_CATEGORY,
  'chat-group-manage': APP_CATEGORY,

  'history-message': STATISTICS_CATEGORY,
  'patient-situation-statistics': STATISTICS_CATEGORY,
  'hospital-assay-report': STATISTICS_CATEGORY,
  'doctor-comprehensive-score': STATISTICS_CATEGORY,
  'enrollment-situation': STATISTICS_CATEGORY,
  'online-doctor': STATISTICS_CATEGORY,
  'data-monthly-report': STATISTICS_CATEGORY,

  'sms-manage': SYSTEM_CATEGORY,
  'chat-system': SYSTEM_CATEGORY,
  'console-account-manage': SYSTEM_CATEGORY,
  'authority-role-manage': SYSTEM_CATEGORY,
  'hospital-authority-manage': SYSTEM_CATEGORY

}

//用于计算2级菜单页面上下顺序, 1最靠前
let priority = 1
export const pagePriority = {
  'node-auditing': priority++,
  'patient-edit': priority++,
  'laboratory-sheet': priority++,
  'take-medicine-record': priority++,
  'patient-record-info': priority++,

  'doctor-auditing': priority++,
  'hospital-manage': priority++,
  'out-patient-time': priority++,
  'todo-work-track': priority++,

  'smart-analytic-system': priority++,
  'app-update': priority++,
  'slider-manage': priority++,
  'knowledge-base': priority++,
  'chat-group-manage': priority++,

  'history-message': priority++,
  'hospital-assay-report': priority++,
  'patient-situation-statistics': priority++,
  'doctor-comprehensive-score': priority++,
  'enrollment-situation': priority++,
  'online-doctor': priority++,
  'data-monthly-report': priority++,

  'chat-system': priority++,
  'sms-manage': priority++,
  'console-account-manage': priority++,
  'authority-role-manage': priority++,
  'hospital-authority-manage': priority++

}

export const pageInfo = {
  'node-auditing': {
    to: nodeAuditing,
    text: '病人审核'
  },
  'patient-edit': {
    to: patientEdit,
    text: '病人修改'
  },
  'laboratory-sheet': {
    to: laboratorySheet,
    text: '化验单查看'
  },
  'take-medicine-record': {
    to: takeMedicineRecord,
    text: '服药确认记录'
  },
  'patient-record-info': {
    to: patientRecordInfo,
    text: '患者录入信息'
  },

  'doctor-auditing': {
    to: doctorAuditing,
    text: '医生管理'
  },
  'out-patient-time': {
    to: outPatientTime,
    text: '医生门诊时间'
  },
  'todo-work-track': {
    to: todoWorkTrack,
    text: '待办工作跟踪'
  },
  'hospital-manage': {
    to: hospitalManage,
    text: '医院管理'
  },

  'smart-analytic-system': {
    to: smartAnalyticSystem,
    text: '智能分析系统'
  },
  'app-update': {
    to: appUpdate,
    text: 'App更新'
  },
  'slider-manage': {
    to: sliderManage,
    text: '轮播图管理'
  },
  'knowledge-base': {
    to: knowledgeBase,
    text: '知识库管理'
  },
  'chat-group-manage': {
    to: chatGroupManage,
    text: '群组管理'
  },

  'history-message': {
    to: historyMessage,
    text: '聊天记录报表'
  },
  'patient-situation-statistics': {
    to: patientSituationStatistics,
    text: '病人情况报表'
  },
  'hospital-assay-report': {
    to: hospitalAssayReport,
    text: '中心验单情况表'
  },
  'doctor-comprehensive-score': {
    to: doctorComprehensiveScore,
    text: '医生综合评分'
  },
  'enrollment-situation': {
    to: enrollmentSituation,
    text: '入组情况统计'
  },
  'online-doctor': {
    to: onlineDoctor,
    text: '在线医生评分'
  },
  'data-monthly-report': {
    to: dataMonthlyReport,
    text: '数据月报'
  },

  'sms-manage': {
    to: smsManage,
    text: '短信系统'
  },
  'chat-system': null,
  'console-account-manage': {
    to: consoleAccountManage,
    text: '后台账号管理'
  },
  'authority-role-manage': {
    to: authorityRoleManage,
    text: '权限分组管理'
  },
  'hospital-authority-manage': {
    to: hospitalAuthorityManage,
    text: '医院权限管理'
  }

}

export function getOpenMenu(currentPageName) {
  const openMenu = []
  switch (currentPageName) {
    case nodeAuditing:
    case patientEdit:
    case laboratorySheet:
    case takeMedicineRecord:
    case patientRecordInfo:
      openMenu.push(PATIENT_CATEGORY)
      break
    case doctorAuditing:
    case hospitalManage:
    case todoWorkTrack:
    case outPatientTime:
      openMenu.push(DOCTOR_CATEGORY)
      break
    case smartAnalyticSystem:
    case appUpdate:
    case sliderManage:
    case knowledgeBase:
    case chatGroupManage:
      openMenu.push(APP_CATEGORY)
      break
    case historyMessage:
    case patientSituationStatistics:
    case hospitalAssayReport:
    case doctorComprehensiveScore:
    case enrollmentSituation:
    case onlineDoctor:
    case dataMonthlyReport:
      openMenu.push(STATISTICS_CATEGORY)
      break
    case smsManage:
    case consoleAccountManage:
    case authorityRoleManage:
    case hospitalAuthorityManage:
      openMenu.push(SYSTEM_CATEGORY)
      break
  }
  return openMenu
}
