import React from 'react'
import MainMenu from '../components/MainMenu'


class Layout extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column" style={{width: '300px', position: 'fixed', height: '-webkit-fill-available',background:'#204F5F'}}>
          <MainMenu />
        </div>
        <div className="column" style={{ marginLeft: '300px' }}>
          {this.props.children}
        </div>

      </div>
    )
  }
}

export default Layout