import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

import './MainMenu.scss'

class MainMenu extends React.Component {
  render() {
    const MainMenuButton = ({title, active, url}) => (
      <div className="columns">
        <div className="column">
          <Link href={url}>
            <button className={ "button main-menu-button" + (active ? "-active" : "")}>
              <p>{title}</p>
            </button>
          </Link>
        </div>
      </div>  
    )
    
    return (
      <div class="main-menu" style={{ background: '#204F5F' , position: "fixed" , width: "200px" , top: "0px", margin: "0px", height: "-webkit-fill-available"}}>
        <div className="columns has-text-centered">
          <div className="column">
            <div className="columns" style={{margin: "2rem"}}>
              <div className="column" style={{ color: 'white'}}>
                <FontAwesomeIcon icon={faCircle} size="6x" />
                <p className="is-size-5">Employee</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <MainMenuButton title="Catalogs"  url="/catalogs"/>
                <MainMenuButton title="Customers" url="/customers"/>
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
