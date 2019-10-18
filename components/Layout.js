import React from 'react'
import MainMenu from '../components/MainMenu'

import './Layout.scss'

class Layout extends React.Component {
  render() {
    return (
      <>
        <MainMenu />
        <div className="columns" style={{background: "#FEFAEF"}}>
          <div className="column layout-content" >
            {this.props.children}
          </div>

        </div>
      </>
    )
  }
}

export default Layout
