import React from 'react'
import Fetch from '../components/fetch'
import Employees from './employees'

class LoginForm extends React.Component {
  state = { users: [{}] }

  constructor(props) {
    super(props)
    this.state = {
      employeeNumber: null,
      jobTitle: null,
      email: null,
      password: null,
      currentUser: null,
      message: ''
    }
  }
  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }
  // componentDidMount() {
  //   fetch('/users')
  //     .then(req => req.json())
  //     .then(users => this.setState({ users }));
  // }

  onSubmit = e => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
      currentUser: this.state.currentUser
    }
    if (user.email === null) {
      return this.setState({
        message: 'Email',
        currentUser: false
      })
    }
    else if (user.password === null) {
      return this.setState({
        message: 'Passwoed',
        currentUser: false
      })
    }
    else if (<Fetch url="/users">
      {data => data.map(users => {
        if (user.email === users.email && user.password === users.employeeNumber) {
          return this.setState({
            employeeNumber: users.employeeNumber,
            jobTitle: users.jobTitle,
            email: users.email,
            currentUser: true,
          })
        }
      })
      }
    </Fetch>) {
      return this.setState({
        currentUser: true
      })
    }
    else {
      return this.setState({
        message: "failed",
        currentUser: null
      })
    }
  }


  render() {
    const { employeeNumber, jobTitle, email, password, message, currentUser } = this.state
    if (currentUser) {
      return (
        <div>
          <p>55555</p>
        </div>
      )
    }
    else {
      return (
        <view>
          <div className="section container column is-one-third" style={{ background: "#DABF8E", marginTop: "20px" }}>
            <h4 class="text-danger">{message}</h4>
            <form onSubmit={this.onSubmit} class="form-inline my-2 my-lg-0">
              <div className="field">
                <label className="label" >User Name</label>
                <div className="control" >
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" >Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </div>
              <div className="control">
                <a>
                  <button className="button is-rounded is-pulled-right" style={{ marginTop: "10px", background: "#398EFA", color: "#FFFFFF" }}>Sign In</button>
                </a>
              </div>
            </form>
            <div className="field is-grouped">
              <div >
                <a href="/Home">
                  <button className="button is-rounded is-pulled-right" style={{ marginTop: "10px", background: "#398EFA", color: "#FFFFFF" }}>Cancel</button>
                </a>
              </div>
            </div>
          </div>
        </view>
      )
    }
  }
}
export default LoginForm