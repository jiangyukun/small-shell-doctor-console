/**
 * Created by jiangyukun on 2017/6/15.
 */
import {getFilterItem} from '../../core/utils'
import {v_t} from '../common/common-helper'

const motherCheckItem = [
  v_t('1', '肝功能'),
  v_t('2', 'HBV-DNA'),
  v_t('3', '乙肝五项（定量）'),
  v_t('4', '乙肝五项（定性）'),
  v_t('5', '肝脏B超')
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
  lastMensesDate: getFilterItem('lastMensesDate', '末次月经日期', []),
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
  visit4MissCheckItem: getFilterItem('visit4MissCheckItem', '访视4缺失检查项', motherCheckItem),
  visit4MissCheckItemBaby: getFilterItem('visit4MissCheckItemBaby', '访视4缺失检查项（宝宝）', babyCheckItem),
  afterDeliveryJulyBeginDate: getFilterItem('afterDeliveryJulyBeginDate', '产后7月开始日期', []),
  actualVisit5Date: getFilterItem('actualVisit5Date', '实际访视5日期', []),
  visit5MissCheckItem: getFilterItem('visit5MissCheckItem', '访视5缺失检查项', motherCheckItem),
  visit5MissCheckItemBaby: getFilterItem('visit5MissCheckItemBaby', '访视5缺失检查项（宝宝）', babyCheckItem)
}
