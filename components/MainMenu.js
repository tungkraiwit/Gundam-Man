import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import './MainMenu.scss'

class MainMenu extends React.Component {
  render() {
    const MainMenuButton = ({title, active}) => (
      <div className="columns">
        <div className="column">
          <button className={ "button main-menu-button" + (active ? "-active" : "")}>
            <p>{title}</p>
          </button>
        </div>
      </div>
    )
    
    return (
      <div style={{ background: '#204F5F' }}>
        <div className="columns has-text-centered">
          <div className="column">
            <div className="columns">
              <div className="column" style={{ color: 'white'}}>
                <FontAwesomeIcon icon={faCircle} size="6x" />
                <p>Employee</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <MainMenuButton title="Catalogs" />
                <MainMenuButton title="Catalogs" />
                <MainMenuButton title="Catalogs" />
                <MainMenuButton title="Catalogs" />
                <MainMenuButton title="Catalogs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu