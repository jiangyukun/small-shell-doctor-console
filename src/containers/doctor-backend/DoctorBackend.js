/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {merge} from 'lodash'
import Button1 from 'app-core/button/Button1'

import DBQueryFilter from './filter/DBQueryFilter'
import FilterItem from '../../components/core/query-filter/FilterItem'
import {CustomDateRange} from '../../components/core/query-filter/custom/'
import PaginateList from '../../components/core/PaginateList'
import {SmartList, HeadContainer, BodyContainer} from '../../components/list/'
import Head from './table/Head'
import Body from './table/Body'
import EditFamilyPhoneDialog from './dialog/EditFamilyPhoneDialog'

import {filter} from './doctor-backend.constant'
import {DOCTOR_BACKEND} from '../../constants/types'
import {context} from '../../core/env'
import * as utils from '../../core/utils'
import {handleListData} from '../common/common-helper'
import {fetchPatientList, updateFamilyPhone} from './doctor-backend.action'

class DoctorBackend extends Component {
  state = {
    open1: false,
    currentIndex: -1,
    showEdit: false
  }

  beginFetch(newPageIndex) {
    this._paginateList.beginFetch(newPageIndex)
  }

  doFetch() {
    this.setState({currentIndex: -1})
    this.props.fetchPatientList(merge(this._queryFilter.getParams(), this._paginateList.getParams()))
  }

  updateOpenFlag(openState) {
    this.setState(openState)
  }

  exportExcel = () => {
    utils.exportExcel(context + '/backend/patient/excel/patient/list', this._queryFilter.getParams())
  }

  componentDidMount() {
    this.beginFetch()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.updateFamilyPhoneSuccess && nextProps.updateFamilyPhoneSuccess) {
      this.beginFetch()
      this.props.clearState(DOCTOR_BACKEND.UPDATE_FAMILY_PHONE)
    }
  }

  render() {
    const {total, list, loading} = handleListData(this.props.patientList)

    let listWidth = 4200
    if (this.state.open1) {
      listWidth += 360
    }
    if (this.state.open2) {
      listWidth += 480
    }

    return (
      <div className="app-function-page">
        {
          this.state.showEdit && (
            <EditFamilyPhoneDialog
              patientInfo={list[this.state.currentIndex]}
              updateFamilyPhone={this.props.updateFamilyPhone}
              updateFamilyPhoneSuccess={this.props.updateFamilyPhoneSuccess}
              onExited={() => this.setState({showEdit: false})}
            />
          )
        }

        <DBQueryFilter ref={c => this._queryFilter = c}
                       className="ex-big-label"
                       beginFilter={() => this.beginFetch(1)}
                       searchKeyName1="doctor_name"
                       searchKeyName2="patient_phone_or_code"
        >
          <Button1 className="btn-primary mr-20"
                   onClick={e => this.setState({showEdit: true})}
                   disabled={this.state.currentIndex == -1}
          >查看
          </Button1>

          <Button1 className="btn-primary mr-20" onClick={this.exportExcel}>导出excel</Button1>

          <FilterItem item={filter.pregnantStatus} paramName="pregnancy_status"/>

          <FilterItem item={filter.lastMensesDate}>
            <CustomDateRange startName="last_menstruation_date_begin" endName="last_menstruation_date_end"/>
          </FilterItem>
          <FilterItem item={filter.beginDate}>
            <CustomDateRange startName="pregnancy_24_week_begin" endName="pregnancy_24_week_end"/>
          </FilterItem>
          <FilterItem item={filter.visit1Date}>
            <CustomDateRange startName="visit_1_date_begin" endName="visit_1_date_end"/>
          </FilterItem>

          <FilterItem item={filter.visit1MissCheckItem} paramName="visit_1_data_miss" useText={true}/>
          <FilterItem item={filter.date32}>
            <CustomDateRange startName="pregnancy_32_week_begin" endName="pregnancy_32_week_end"/>
          </FilterItem>
          <FilterItem item={filter.visit2Date}>
            <CustomDateRange startName="visit_2_date_begin" endName="visit_2_date_end"/>
          </FilterItem>

          <FilterItem item={filter.visit2MissCheckItem} paramName="visit_2_data_miss" useText={true}/>
          <FilterItem item={filter.expectedDate}>
            <CustomDateRange startName="pre_production_date_begin" endName="pre_production_date_end"/>
          </FilterItem>
          <FilterItem item={filter.actualDate}>
            <CustomDateRange startName="delivery_day_begin" endName="delivery_day_end"/>
          </FilterItem>

          <FilterItem item={filter.deliverMissCheckItem} paramName="visit_3_data_miss" useText={true}/>
          <FilterItem item={filter.deliverMissCheckItemBaby} paramName="visit_3_baby_data_miss"/>
          <FilterItem item={filter.week8Date}>
            <CustomDateRange startName="postnatal_8_week_begin" endName="postnatal_8_week_end"/>
          </FilterItem>
          <FilterItem item={filter.actualVisit4Date}>
            <CustomDateRange startName="visit_4_date_begin" endName="visit_4_date_end"/>
          </FilterItem>

          <FilterItem item={filter.visit4MissCheckItem} paramName="visit_4_data_miss" useText={true}/>
          <FilterItem item={filter.visit4MissCheckItemBaby} paramName="visit_4_baby_data_miss"/>
          <FilterItem item={filter.afterDeliveryJulyBeginDate}>
            <CustomDateRange startName="postnatal_7_mouth_begin" endName="postnatal_7_mouth_end"/>
          </FilterItem>
          <FilterItem item={filter.actualVisit5Date}>
            <CustomDateRange startName="visit_5_date_begin" endName="visit_5_date_end"/>
          </FilterItem>

          <FilterItem item={filter.visit5MissCheckItem} paramName="visit_5_data_miss" useText={true}/>
          <FilterItem item={filter.visit5MissCheckItemBaby} paramName="visit_5_baby_data_miss"/>
        </DBQueryFilter>

        <PaginateList ref={c => this._paginateList = c}
                      doFetch={() => this.doFetch()}
                      total={total}
                      lengthName="rows"
                      byName="order_By"
        >

          <SmartList width={listWidth}
                     weight={[]}
                     loading={loading}
                     fixHead={true} fixLeft={[0, 1, 2]}>
            <HeadContainer>
              <Head open1={this.state.open1}
                    open2={this.state.open2}
                    updateOpenFlag={openFlag => this.updateOpenFlag(openFlag)}
              />
            </HeadContainer>
            <BodyContainer>
              <Body list={list}
                    open1={this.state.open1}
                    currentIndex={this.state.currentIndex}
                    selectItem={index => this.setState({currentIndex: index})}
              />
            </BodyContainer>
          </SmartList>
        </PaginateList>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.doctorBackend,
    patientList: state.patientList
  }
}

DoctorBackend.propTypes = {
  updateFamilyPhoneSuccess: PropTypes.bool
}

export default connect(mapStateToProps, {
  fetchPatientList, updateFamilyPhone
})(DoctorBackend)
