/**
 * Created by jiangyukun on 2016/12/29.
 */
import React from 'react'
import {Route} from 'react-router'

import PlatformApp from '../containers/PlatformApp'
import IndexPage from '../containers/IndexPage'
import IllegalAuthority from '../containers/IllegalAuthority'

import doctor__backend from './lazy-pages/doctor-backend'

export default function getPageRoute(path, pageList) {
  return (
    <Route path={path} component={PlatformApp}>
      <Route path="index" component={IndexPage}/>
      <Route path="doctor-backend" getComponent={doctor__backend()}/>
      <Route path=":pathname" component={IllegalAuthority}/>
    </Route>
  )
}
