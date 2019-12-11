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
    const eiei = await Axios.get('http://10.10.186.195:3001/session')
    this.setState({
      email: eiei.data.email,
      employeeNumber: eiei.data.employee_number,
      officeCode: eiei.data.office_code,
      jobTitle: eiei.data.job_title
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
    const ShowManu = ({ jobtitle }) => {
      if (jobtitle === "President") {
        return (
          <div className="column" onClick={this.onRefresh}>
            <MainMenuButton title="Product" url="/product" />
            <MainMenuButton title="Customers" url="/customers" />
            <MainMenuButton title="Employee" url="/employees" />
            <MainMenuButton title="Order" url="/order" />
          </div>)
      }
      else if (jobtitle === "VP Sales") {
        return (
          <div className="column" onClick={this.onRefresh}>
            <MainMenuButton title="Product" url="/product" />
            <MainMenuButton title="Customers" url="/customers" />
            <MainMenuButton title="Employee" url="/employees" />
            <MainMenuButton title="Order" url="/order" />
          </div>)
      }
      else if (jobtitle === "VP Marketing") {
        return (
          <div className="column" onClick={this.onRefresh}>
            <MainMenuButton title="Product" url="/product" />
            <MainMenuButton title="Customers" url="/customers" />
            <MainMenuButton title="Employee" url="/employees" />
            <MainMenuButton title="Order" url="/order" />
          </div>)
      }
      else if (jobtitle === "Sales Manager (APAC)") {
        return (
          <div className="column" onClick={this.onRefresh}>
            <MainMenuButton title="Product" url="/product" />
            <MainMenuButton title="Customers" url="/customers" />
            <MainMenuButton title="Employee" url="/employees" />
            <MainMenuButton title="Order" url="/order" />
          </div>)
      }
      else if (jobtitle === "Sale Manager (EMEA)") {
        return (
          <div className="column" onClick={this.onRefresh}>
            <MainMenuButton title="Product" url="/product" />
            <MainMenuButton title="Customers" url="/customers" />
            <MainMenuButton title="Employee" url="/employees" />
            <MainMenuButton title="Order" url="/order" />
          </div>)
      }
      else if (jobtitle === "Sales Manager (NA)") {
        return (
          <div className="column" onClick={this.onRefresh}>
            <MainMenuButton title="Product" url="/product" />
            <MainMenuButton title="Customers" url="/customers" />
            <MainMenuButton title="Employee" url="/employees" />
            <MainMenuButton title="Order" url="/order" />
          </div>)
      }
      else {
        return (
          <div className="column" onClick={this.onRefresh}>
            <MainMenuButton title="Product" url="/product" />
            <MainMenuButton title="Customers" url="/customers" />
            <MainMenuButton title="Order" url="/order" />
          </div>)
      }

    }
    const { jobTitle } = this.state

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
              <ShowManu jobtitle={jobTitle} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu
