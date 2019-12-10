import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import './MainMenu.scss'
import Fetch from '../components/fetch'
import Axios from 'axios'

class MainMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      employeeNumber: '',
      officeCode: '',
      jobTitle: ''
    }
  }
  async componentDidMount() {
    const eiei = await Axios.get('http://localhost:3001/session')
    this.setState({
      email: eiei.data.email,
      employeeNumber: eiei.data.employeeNumber,
      officeCode: eiei.data.officeCode,
      jobTitle: eiei.data.jobTitle
    })
  }
  render() {
    const MainMenuButton = ({ title, active, url }) => (
      <div className="columns">
        <div className="column">
          <Link href={url}>
            <button className={"button main-menu-button" + (active ? "-active" : "")}>
              <p>{title}</p>
            </button>
          </Link>
        </div>
      </div>
    )
    const {jobTitle} = this.state

    return (
      <div class="main-menu" style={{ background: '#204F5F', position: "fixed", width: "200px", top: "0px", margin: "0px", height: "-webkit-fill-available" }}>
        <div className="columns has-text-centered">
          <div className="column">
            <div className="columns" style={{ margin: "2rem" }}>
              <div className="column" style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faCircle} size="6x" />
                <p className="is-size-5">{jobTitle}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <MainMenuButton title="Product" url="/product" />
                <MainMenuButton title="Customers" url="/customers" />
                <MainMenuButton title="Employee" url="/employees" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu
