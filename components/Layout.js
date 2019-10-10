import React from 'react'
import MainMenu from '../components/MainMenu'


class Layout extends React.Component {
  render() {
    return (
      <div style={{width: '300px', position: 'fixed', height: '-webkit-fill-available',background:'#204F5F'}}>
        <MainMenu />
      </div>
    )
  }
}

export default Layout