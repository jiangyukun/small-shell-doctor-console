/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'

class AppContent extends Component {
  render() {
    return (
      <div className="app-content">
        <div className="app-content-body fade-in-up">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppContent
