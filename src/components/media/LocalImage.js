/**
 * Created by jiangyukun on 2017/5/27.
 */
import React from 'react'
import PropTypes from 'prop-types'

class LocalImage extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    let reader = new FileReader()
    reader.onload = (e) => {
      this.data = e.target.result
      this.setState({loaded: true})
    }
    reader.readAsDataURL(this.props.file)
  }

  render() {
    if (this.state.loaded) {
      return (
        <img src={this.data} className="img-responsive"/>
      )
    }
    return null
  }
}

LocalImage.propTypes = {
  file: PropTypes.any
}

export default LocalImage
