/**
 * Created by jiangyukun on 2017/2/24.
 */
import React from 'react'
import PropTypes from 'prop-types'

import {getMatchTextList} from '../../core/utils'

const HighLight = (props) => {
  let handledText = []
  if (props.txt) {
    handledText.push(getMatchTextList(props.txt, props.match))
  } else if (props.children) {
    handledText = React.Children.map(props.children, child => {
      if (typeof child != 'string') {
        return child
      }
      return getMatchTextList(child, props.match)
    })
  }

  return (
    <span>
      {
        handledText.map((matches, index) => {
          if (!(matches instanceof Array)) {
            return matches
          }
          return (
            <span key={index}>
            {
              matches.map((m, index) => {
                if (m == props.match) {
                  return <span key={index} style={{color: '#f05050'}}>{props.match}</span>
                }
                return m
              })
            }
          </span>
          )
        })
      }
      </span>
  )
}

HighLight.propTypes = {
  match: PropTypes.string,
  txt: PropTypes.string
}

export default HighLight
