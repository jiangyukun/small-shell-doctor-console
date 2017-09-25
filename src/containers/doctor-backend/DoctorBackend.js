/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {merge} from 'lodash'
import Button1 from 'app-core/button/Button1'

import NodeAuditingQueryFilter from './filter/NodeAuditingQueryFilter'
import FilterItem from '../../components/core/query-filter/FilterItem'
import {CustomDateRange, CustomTextInput, SubDateSelect, SubOptions} from '../../components/core/query-filter/custom/'
import PaginateList from '../../components/core/PaginateList'
import {SmartList, HeadContainer, BodyContainer} from '../../components/list/'
import Head from './table/Head'
import Body from './table/Body'
import EditVisitCard from './edit/EditVisitCard'
import EditRemark from './edit/EditRemark'
import EditIsCompleteVisit from './edit/EditIsCompleteVisit'

import {filter} from './doctor-backend.constant'
import * as utils from '../../core/utils'
import {fetchPatientList} from './doctor-backend.action'
import {handleListData} from '../common/common-helper'

class DoctorBackend extends Component {
  state = {
    open1: false,
    open2: false,
    currentIndex: -1,
    showEdit: false,
    showDetail: false,
    showBabyInfoDetail: false
  }

  beginFetch(newPageIndex) {
    this._paginateList.beginFetch(newPageIndex)
  }

  doFetch() {
    this.setState({currentIndex: -1})
    this.props.fetchPatientList(merge(this._queryFilter.getParams(), this._paginateList.getParams()))
  }

  editVisitCard(id, state) {

  }

  editRemark(id, remarkType, remark) {

  }

  editIsCompleteVisit(id, completeVisitType, completeVisitState) {

  }

  updateOpenFlag(openState) {
    this.setState(openState)
  }

  exportExcel() {
    location.href = 'export/excel' + utils.urlParam(this._queryFilter.getParams())
  }

  componentDidMount() {
    this.beginFetch()
  }

  render() {
    const {total, list, loading, loaded} = handleListData(this.props.patientList)
    const {isCanEdit, isCanExport} = this.props.authority

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
          this.state.showEdit && this.state.currentIndex != -1 && (
            <EditPatientInfoWrap
              patientId={list[this.state.currentIndex]['patient_Id']}
              updateSuccessCallback={() => this.beginFetch()}
              onExited={() => this.setState({showEdit: false})}
              isCanEdit={isCanEdit}/>
          )
        }

        {
          this.state.showDetail && this.state.currentIndex != -1 && (
            <CompleteMedicalRecordDialog
              userPhone={list[this.state.currentIndex]['patient_Phone']}
              onExited={() => this.setState({showDetail: false})}
            />
          )
        }

        <EditVisitCard ref={c => this._editVisitCard = c} editVisitCard={(...arg) => this.editVisitCard(...arg)}/>
        <EditRemark ref={c => this._editRemark = c} editRemark={(...arg) => this.editRemark(...arg)}/>
        <EditIsCompleteVisit ref={c => this._editIsCompleteVisit = c} editIsCompleteVisit={(...arg) => this.editIsCompleteVisit(...arg)}/>

        <NodeAuditingQueryFilter ref={c => this._queryFilter = c}
                                 className="ex-big-label"
                                 beginFilter={() => this.beginFetch(1)}
                                 searchKeyName1="doctor_key_Words"
                                 searchKeyName2="key_Words"
        >
          <Button1 className="btn-primary mr-20"
                   onClick={e => this.setState({showEdit: true})}
                   disabled={this.state.currentIndex == -1}
          >查看
          </Button1>

          {
            isCanExport && (
              <Button1 className="btn-primary mr-20" onClick={e => this.exportExcel()}>导出excel</Button1>
            )
          }

          <FilterItem item={filter.pregnantStatus} paramName=""/>

          <FilterItem item={filter.register}>
            <CustomDateRange startName="" endName=""/>
          </FilterItem>
          <FilterItem item={filter.beginDate}>
            <CustomDateRange startName="" endName=""/>
          </FilterItem>
          <FilterItem item={filter.visit1Date}>
            <CustomDateRange startName="" endName=""/>
          </FilterItem>


          <FilterItem item={filter.visit1MissCheckItem} paramName=""/>
          <FilterItem item={filter.date32}>
            <CustomDateRange startName="" endName=""/>
          </FilterItem>
          <FilterItem item={filter.visit2Date}>
            <CustomDateRange startName="" endName=""/>
          </FilterItem>
          <FilterItem item={filter.visit2MissCheckItem} paramName=""/>
          <FilterItem item={filter.expectedDate}>
            <CustomDateRange startName="" endName=""/>
          </FilterItem>
          <FilterItem item={filter.actualDate}>
            <CustomDateRange startName="" endName=""/>
          </FilterItem>

          {/*
          <FilterItem item={filter.auditingStateList} paramName="check_Status"/>

          <FilterItem size="big" item={filter.nodeFilterList} paramName="note_Type">
            <SubDateSelect startName="note_Begin_Time" endName="note_End_Time"/>
          </FilterItem>

          <FilterItem item={filter.visitCardList} paramName="status"/>

          <FilterItem item={filter.isPregnant12To14AcceptedVisit} paramName="visit_2_Accept_Visit"/>

          <FilterItem item={filter.isBaby8MonthAcceptedVisit} paramName="visit_5_Accept_Visit"/>

          <FilterItem size="big" item={filter.checkResultFilterList} paramName="visit_Type">
            <SubOptions options={filter.resultList} title="结果为" paramName="visit_Result_Type"/>
          </FilterItem>

          <FilterItem item={filter.backendMangerList}>
            <CustomTextInput placeholder="请输入后台管理人员" textName="backend_Manager"/>
          </FilterItem>

          <FilterItem size="small" item={filter.operationPersonList}>
            <CustomTextInput placeholder="请输入运营人员" textName="operation_Manager"/>
          </FilterItem>

          <FilterItem size="small" item={filter.register}>
            <CustomDateRange startName="registration_Begin_Time" endName="registration_End_Time"/>
          </FilterItem>
          */}
        </NodeAuditingQueryFilter>

        <PaginateList ref={c => this._paginateList = c}
                      doFetch={() => this.doFetch()}
                      total={total}
                      lengthName="rows"
                      byName="order_By"
        >

          <SmartList width={listWidth}
                     weight={[]}
                     loading={this.props.loading}
                     fixHead={true} fixLeft={[0, 1, 2]}>
            <HeadContainer>
              <Head open1={this.state.open1}
                    open2={this.state.open2}
                    updateOpenFlag={openFlag => this.updateOpenFlag(openFlag)}/>
            </HeadContainer>
            <BodyContainer>
              <Body list={list}
                    open1={this.state.open1}
                    open2={this.state.open2}
                    currentIndex={this.state.currentIndex}
                    selectItem={index => this.setState({currentIndex: index})}
                    openVisitCardDialog={(...arg) => this._editVisitCard.open(...arg)}
                    openEditRemarkDialog={(...arg) => this._editRemark.open(...arg)}
                    openIsCompleteVisitDialog={(...arg) => this._editIsCompleteVisit.open(...arg)}
                    isCanEdit={isCanEdit}/>
            </BodyContainer>
          </SmartList>
        </PaginateList>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    patientList: state.patientList

  }
}

export default connect(mapStateToProps, {
  fetchPatientList
})(DoctorBackend)
