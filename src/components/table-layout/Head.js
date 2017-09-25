/**
 * Created by jiangyukun on 2017/1/19.
 */
import React, {Component, PropTypes, Children, cloneElement} from 'react'

import HeadItem from './HeadItem'

class Head extends Component {
  render() {
    const weight = this.context.weight

    const headItems = []
    let current = 0
    Children.forEach(this.props.children, (child, index) => {
      if (!child) {
        return
      }

      if (child.props.flex || child.props.width) {
        headItems.push(cloneElement(child, {key: index, ...child.props}))
      } else {
        if (typeof weight[current] == 'string') {
          headItems.push(cloneElement(child, {key: index, width: weight[current]}))
        } else {
          headItems.push(cloneElement(child, {key: index, flex: weight[current] || 1}))
        }
      }
      current++
    })

    return (
      <ul className="flex-list-header">
        {headItems}
      </ul>
    )
  }
}

Head.propTypes = {
  flex: PropTypes.number,
  width: PropTypes.string
}
Head.contextTypes = {
  weight: PropTypes.array
}

Head.Item = HeadItem

export default Head
