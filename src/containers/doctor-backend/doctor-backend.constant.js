/**
 * Created by jiangyukun on 2017/6/15.
 */
import {getFilterItem} from '../../core/utils'
import constants from '../../core/constants'
import {v_t} from '../common/common-helper'

const auditingState = constants.auditingState

const motherCheckItem = [
  v_t('1', '肝功能'),
  v_t('2', 'HBV-DNA'),
  v_t('3', '乙肝五项（定量）'),
  v_t('4', '乙肝五项（定性）'),
  v_t('5', '乙肝五项（肝脏B超）')
]

const babyCheckItem = [
  v_t('1', 'HBV-DNA'),
  v_t('2', '乙肝五项（定量）'),
  v_t('3', '乙肝五项（定性）')
]

export const filter = {
  pregnantStatus: getFilterItem('pregnantStatus', '怀孕状态', [
    v_t('1', '备孕'),
    v_t('2', '已怀孕'),
    v_t('3', '已分娩')
  ]),

  register: getFilterItem('register', '注册日期', []),
  beginDate: getFilterItem('beginDate', '妊娠24周开始日期', []),
  visit1Date: getFilterItem('visit1Date', '实际访视1日期', []),
  visit1MissCheckItem: getFilterItem('visit1MissCheckItem', '访视1缺失检查项', motherCheckItem),
  date32: getFilterItem('date32', '妊娠32周开始日期', []),
  visit2Date: getFilterItem('visit2Date', '实际访视2日期', []),
  visit2MissCheckItem: getFilterItem('visit2MissCheckItem', '访视2缺失检查项', motherCheckItem),
  expectedDate: getFilterItem('expectedDate', '预产期', []),
  actualDate: getFilterItem('actualDate', '实际分娩日期', []),
  deliverMissCheckItem: getFilterItem('deliverMissCheckItem', '分娩缺失检查项', motherCheckItem),
  deliverMissCheckItemBaby: getFilterItem('deliverMissCheckItemBaby', '分娩缺失检查项（宝宝）', babyCheckItem),
  week8Date: getFilterItem('week8Date', '产后8周开始日期', []),
  actualVisit4Date: getFilterItem('actualVisit4Date', '实际访视4日期', []),

/*
  auditingStateList: getFilterItem('auditingState', '审核状态', [
    {value: auditingState.auditing, text: '审核中'},
    {value: auditingState.auditingPass, text: '审核通过'},
    {value: auditingState.auditingUnPass, text: '审核不通过'}
  ]),
  visitCardList: getFilterItem('visitCard', '随访卡', [{value: '1', text: '是'}, {value: '2', text: '否'}, {value: '3', text: '未知'}]),
  isPregnant12To14AcceptedVisit: getFilterItem('isPregnant12To14AcceptedVisit', '孕24-32周是否接受随访'),
  isBaby8MonthAcceptedVisit: getFilterItem('isBaby8MonthAcceptedVisit', '宝宝产后7-12月是否接受随访'),
  checkResultFilterList: getFilterItem('checkResultFilter', '检查结果筛选', [
    {value: 1, text: '孕12-24周访视'},
    {value: 2, text: '孕24-32周访视'},
    {value: 3, text: '分娩访视'},
    {value: 4, text: '产后4-8周访视'},
    {value: 5, text: '产后7-12周访视'}
  ]),
  resultList: [
    {value: 1, text: '无效'},
    {value: 2, text: '未查'},
    {value: 3, text: '待上传'},
    {value: 4, text: '已录入'},
    {value: 5, text: '未填写'},
    {value: 6, text: '待跟进'}
  ],
  nodeFilterList: getFilterItem('nodeFilter', '节点筛选', [
    {value: 1, text: '孕14周第一天'},
    {value: 2, text: '孕26周第一天'},
    {value: 3, text: '孕33周第一天'},
    {value: 4, text: '孕41周第一天'},
    {value: 5, text: '产后6周第一天'},
    {value: 6, text: '产后46周第一天'},
    {value: 7, text: '产后10周第一天'},
    {value: 8, text: '产后50周第一天'},
    {value: 9, text: '产后8月第一天'},
    {value: 10, text: '产后72周第一天'},
    {value: 11, text: '产后9月第一天'},
    {value: 12, text: '产后76周第一天'},
    {value: 13, text: '产后10月第一天'},
    {value: 14, text: '产后80周第一天'}
  ]),
  backendMangerList: getFilterItem('backendManager', '后台管理人员', []),
  operationPersonList: getFilterItem('operationPerson', '运营人员', [])*/

}
