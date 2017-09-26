/**
 * Created by jiangyukun on 2017/9/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'app-core/modal'
import {FlexDiv, Line, Part} from 'app-core/layout'
import Input from 'app-core/form/Input'
import TextArea from 'app-core/form/TextArea'

import ConfirmOrClose from '../../../components/dialog/ConfirmOrClose'
import addCommonFunction from '../../common/function/addCommonFunction'

class EditFamilyPhoneDialog extends React.Component {
  state = {
    show: true,
    showConfirm: false,
    familyPhone: ''
  }

  close = () => {
    this.setState({show: false})
  }

  updateFamilyPhone = () => {
    console.log(this.patientUserId, this.patientFamilyId, this.state.familyPhone)
    this.props.updateFamilyPhone(this.patientUserId, this.patientFamilyId, this.state.familyPhone)
  }

  componentWillMount() {
    const patientInfo = this.props.patientInfo
    this.patientUserId = patientInfo['patient_user_id']
    this.patientFamilyId = patientInfo['family_phone_id']
    this.patientCode = patientInfo['patient_code']
    this.patientName = patientInfo['patient_name']
    this.setState({familyPhone: patientInfo['family_phone'] || ''})
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.updateFamilyPhoneSuccess && nextProps.updateFamilyPhoneSuccess) {
      this.props.showSuccess('更新成功！')
      this.close()
    }
  }

  render() {
    return (
      <Modal
        show={this.state.show} onHide={this.close} onExited={this.props.onExited}>
        <Modal.Header closeButton={true}>
          <Modal.Title>患者编号{this.patientCode}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlexDiv>
            <Part>姓名：</Part>
            <Part>
              <Input value={this.patientName} disabled={true}/>
            </Part>
          </FlexDiv>

          <Line/>

          <FlexDiv>
            <Part>家属手机号码：</Part>
            <Part>
              <TextArea value={this.state.familyPhone} onChange={e => this.setState({familyPhone: e.target.value})}></TextArea>
            </Part>
          </FlexDiv>
        </Modal.Body>
        <Modal.Footer>
          <ConfirmOrClose
            onCancel={this.close} onConfirm={this.updateFamilyPhone}/>
        </Modal.Footer>
      </Modal>
    )
  }
}

EditFamilyPhoneDialog.propTypes = {
  patientInfo: PropTypes.object,
  updateFamilyPhoneSuccess: PropTypes.bool,
  onExited: PropTypes.func.isRequired
}

export default addCommonFunction(EditFamilyPhoneDialog)
