import React from 'react'
import Fetch from '../components/fetch'
import Axios from 'axios'

// import fetch from 'isomorphic-unfetch'
// import { async } from 'q'

class Session extends React.Component {
  // state = { session: null }
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
    // await Axios.get('http://localhost:3001/users/session')
    const eiei = await Axios.get('http://localhost:3001/session')
    // this.setState.profile = this.state.session.data
    // console.log(this.setState.session.data)
    // console.log(this.setState.profile)
    this.setState({
      email: eiei.data.email,
      employeeNumber: eiei.data.employeeNumber,
      officeCode: eiei.data.officeCode,
      jobTitle: eiei.data.jobTitle
    })
  }

  render() {
    const {email,employeeNumber,officeCode,jobTitle} = this.state
    return (
      <div>
        <p>{email}</p>
        <p>{employeeNumber}</p>
        <p>{officeCode}</p>
        <p>{jobTitle}</p>
      </div>
    )
  }
}
export default Session