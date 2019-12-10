import React from 'react'
import Axios from 'axios'
import Router from 'next/router'

class Content extends React.Component {
  onLogout = e => {
    Axios.post('http://localhost:3001/login', {
      email: null,
      password: null,
      type: 'Logout'
    })
    Router.push({
      pathname: '/'
    })
  }

  render() {
    const { title } = this.props
    return (
      <div>
        <div className="columns">
          <div className="column" style={{ margin: "1rem", top: "0px" }} >
            <a onClick={this.onLogout} className="button is-rounded is-pulled-right " style={{ margin: '12px', color: 'white', background: '#F19671' }}>log out</a>
            <div className="is-centered is-size-3" style={{ margin: '12px' }}>{title}</div>
          </div>
        </div>
        {/* <div className="columns">
        <div className="column">        
        </div>
      </div> */}
      </div>
    )
  }
}

export default Content