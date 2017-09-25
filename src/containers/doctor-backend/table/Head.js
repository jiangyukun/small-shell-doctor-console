/**
 * Created by jiangyukun on 2016/12/1.
 */
import React, {Component, PropTypes} from 'react'

import Layout from '../../../components/table-layout/Layout'

class Head extends Component {

  render() {
    const {Head, Row} = Layout
    return (
      <Head>
        <Head.Item>患者编号</Head.Item>
        <Head.Item>患者姓名</Head.Item>
        <Head.Item>手机号码</Head.Item>
        <Head.Item width="150px">家属手机号码（可以添加）</Head.Item>
        <Head.Item>医院名称</Head.Item>

        <Head.Item>感染科医生
          {!this.props.open1 && <i className="fa fa-arrow-right" title="展开其他医生" onClick={e => this.props.updateOpenFlag({open1: true})}></i>}
          {this.props.open1 && <i className="fa fa-arrow-left" title="收起其他医生" onClick={e => this.props.updateOpenFlag({open1: false})}></i>}
        </Head.Item>
        {this.props.open1 && <Head.Item>妇产科医生</Head.Item>}
        {this.props.open1 && <Head.Item>儿科医生</Head.Item>}

        <Head.Item>怀孕状态</Head.Item>
        <Head.Item>目前孕周</Head.Item>
        <Head.Item>注册孕周</Head.Item>
        <Head.Item>末次月经日期</Head.Item>
        <Head.Item>妊娠24周开始日期</Head.Item>
        <Head.Item>实际访视1日期</Head.Item>
        <Head.Item>访视1缺失检查项</Head.Item>
        <Head.Item>妊娠32周开始日期</Head.Item>
        <Head.Item>实际访视2日期</Head.Item>
        <Head.Item>访视2缺失检查项</Head.Item>
        <Head.Item>预产期</Head.Item>
        <Head.Item>实际分娩日期</Head.Item>
        <Head.Item>分娩缺失检查项</Head.Item>
        <Head.Item width="150px">分娩缺失检查项（宝宝）</Head.Item>
        <Head.Item width="150px">产后8周开始日期（宝宝）</Head.Item>
        <Head.Item>实际访视4日期</Head.Item>
        <Head.Item width="200px">访视4（产后4~8周）缺失检查项</Head.Item>
        <Head.Item width="220px">访视4（产后4~8周）缺失检查项（宝宝）</Head.Item>
        <Head.Item>产后7月开始日期</Head.Item>
        <Head.Item>实际访视5日期</Head.Item>
        <Head.Item width="200px">访视5（产后7~12月）缺失检查项</Head.Item>
        <Head.Item width="230px">访视5（产后7~12月）缺失检查项（宝宝）</Head.Item>

      </Head>
    )
  }
}

Head.propTypes = {
  open1: PropTypes.bool,
  open2: PropTypes.bool,
  updateOpenFlag: PropTypes.func
}

export default Head
