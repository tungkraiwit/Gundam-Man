import React from 'react'
import Api from '../api'

class Fetch extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    Api.get(this.props.url).then( res => {
      this.setState({ data: res.data })
    })
  }

  render() {
    return this.props.children(this.state.data)
  }
}

export default Fetch
