/**
 * Created by jiangyukun on 2017/1/19.
 */
import React, {Component, PropTypes, cloneElement, Children} from 'react'
import classnames from 'classnames'

import RowItem from './RowItem'

class Row extends Component {
  render() {
    const weight = this.context.weight

    const rowItems = []
    let current = 0
    Children.forEach(this.props.children, (child, index) => {
      if (!child) {
        return
      }
      if (child.props.flex || child.props.width) {
        rowItems.push(cloneElement(child, {key: index, ...child.props}))
      } else {
        if (typeof weight[current] == 'string') {
          rowItems.push(cloneElement(child, {key: index, width: weight[current]}))
        } else {
          rowItems.push(cloneElement(child, {key: index, flex: weight[current] || 1}))
        }
        current++
      }
    })

    const {selected, ...props} = this.props
    return (
      <ul className={classnames('flex-list-row', {'selected': selected})} {...props}>
        {rowItems}
      </ul>
    )
  }
}

Row.propTypes = {
  flex: PropTypes.number,
  width: PropTypes.string
}
Row.contextTypes = {
  weight: PropTypes.array
}

Row.Item = RowItem

export default Row
