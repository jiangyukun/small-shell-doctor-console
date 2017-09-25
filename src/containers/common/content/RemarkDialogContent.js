/**
 * Created by jiangyukun on 2017/5/26.
 */
import React from 'react'
import Transition from 'app-core/modal/Transition'
import './remark-dialog-content.scss'

export default (props) => {
  return (
    <Transition show={props.show}>
      <div className="my-modal-content remark-dialog-content">
        {props.children}
      </div>
    </Transition>
  )
}
