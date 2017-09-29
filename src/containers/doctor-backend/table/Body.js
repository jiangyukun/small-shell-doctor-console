/**
 * Created by jiangyukun on 2016/12/15.
 */
import React, {Component, PropTypes} from 'react'

import Layout from '../../../components/table-layout/Layout'
import {initArray} from '../../common/common-helper'
import {isEmpty} from '../../../constants/smart-analytic-constant'

class Body extends Component {
  render() {
    const {Row} = Layout
    return (
      <div>
        {
          this.props.list.map((patient, index) => {
            return (
              <Row key={index}
                   onClick={e => this.props.selectItem(index)}
                   selected={this.props.currentIndex == index}
                   style={{minHeight: '50px'}}
              >

                <Row.Item>{patient['patient_code']}</Row.Item>
                <Row.Item>{patient['patient_name']}</Row.Item>
                <Row.Item>{patient['patient_phone']}</Row.Item>
                <Row.Item width="150px">
                  {
                    isEmpty(patient['family_phone']) && (<span style={{color: 'gray'}}> 无 </span>)
                  }
                  {
                    !isEmpty(patient['family_phone']) && patient['family_phone']
                  }
                </Row.Item>
                <Row.Item>{patient['hospital_name']}</Row.Item>

                {this.props.open1 && <Row.Item>{patient['infection_doctor_name'] || '-'}</Row.Item>}
                {this.props.open1 && ( <Row.Item>{patient['obstetrics_doctor_name']}</Row.Item>)}
                {this.props.open1 && (<Row.Item>{patient['pediatrics_doctor_name']}</Row.Item>)}

                <Row.Item>{patient['pregnancy_status']}</Row.Item>
                <Row.Item>{patient['now_pregnancy_week']}</Row.Item>
                <Row.Item>{patient['register_pregnancy_week']}</Row.Item>
                <Row.Item>{patient['last_menstruation_date']}</Row.Item>
                <Row.Item>{patient['pregnancy_24_week_date']}</Row.Item>
                <Row.Item>{patient['visit_1_date']}</Row.Item>
                <Row.Item>{patient['visit_1_data_miss']}</Row.Item>
                <Row.Item>{patient['pregnancy_32_week_date']}</Row.Item>
                <Row.Item>{patient['visit_2_date']}</Row.Item>
                <Row.Item>{patient['visit_2_data_miss']}</Row.Item>
                <Row.Item>{patient['pre_production_date']}</Row.Item>
                <Row.Item>{patient['delivery_day']}</Row.Item>
                <Row.Item>{patient['visit_3_data_miss']}</Row.Item>
                <Row.Item width="150px">
                  {
                    initArray(patient['visit_3_baby_data_miss']).map((item, index) => (
                      <div key={index}>{item}</div>
                    ))
                  }
                </Row.Item>
                <Row.Item width="150px">{patient['postnatal_8_week_date']}</Row.Item>
                <Row.Item>{patient['visit_4_date']}</Row.Item>
                <Row.Item width="200px">{patient['visit_4_data_miss']}</Row.Item>
                <Row.Item width="220px">
                  {
                    initArray(patient['visit_4_baby_data_miss']).map((item, index) => (
                      <div key={index}>{item}</div>
                    ))
                  }
                </Row.Item>
                <Row.Item>{patient['postnatal_7_mouth_date']}</Row.Item>
                <Row.Item>{patient['visit_5_date']}</Row.Item>
                <Row.Item width="200px">{patient['visit_5_data_miss']}</Row.Item>
                <Row.Item width="230px">
                  {
                    initArray(patient['visit_5_baby_data_miss']).map((item, index) => (
                      <div key={index}>{item}</div>
                    ))
                  }
                </Row.Item>
              </Row>
            )
          })
        }
      </div>
    )
  }
}

Body.propTypes = {
  list: PropTypes.array,
  currentIndex: PropTypes.number,
  open1: PropTypes.bool,
  open2: PropTypes.bool,
  selectItem: PropTypes.func,
  openVisitCardDialog: PropTypes.func,
  openEditRemarkDialog: PropTypes.func,
  openIsCompleteVisitDialog: PropTypes.func,
  isCanEdit: PropTypes.bool
}

export default Body
