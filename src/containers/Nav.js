/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component, PropTypes} from 'react'
import {Link, routerShape} from 'react-router'
import Menu from 'antd/lib/menu'
import {getPath} from '../core/utils'

class Nav extends Component {
  render() {
    const Item = Menu.Item
    const doctorBackend = getPath('doctor-backend')
    return (
      <nav>
        <div className="navigate-text">
          <span>导航</span>
        </div>

        <Menu theme="dark"
              selectedKeys={['doctor-backend']}
              mode="inline"
        >
          <Item key="doctor-backend">
            <Link to={doctorBackend}>
              <span>医生后台</span>
            </Link>
          </Item>
        </Menu>
      </nav>
    )
  }
}

Nav.contextTypes = {
  router: routerShape
}

Nav.propTypes = {

}

export default Nav
