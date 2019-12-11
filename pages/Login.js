import React from 'react'
import Axios from 'axios'
import Router from 'next/router'
import bcrypt from 'bcryptjs'

class LoginForm extends React.Component {
  state = { profile: [{}] }

  constructor(props) {
    super(props)
    this.state = {
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

  onSubmit = e => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
      currentUser: this.state.currentUser
    }
    if (user.email === null) {
      return this.setState({
        email: null,
        password: null,
        message: 'Email',
        currentUser: false
      })
    }
    else if (user.password === null) {
      return this.setState({
        password: null,
        message: 'Password',
        currentUser: false
      })
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user.password, salt);
      this.CheckLogin(user.email, hash)
    }
  }
  async CheckLogin(Cemail, Cpassword) {
    // console.log("มาแล้ว")
    console.log(Cpassword)
    try {
      await Axios.post('http://localhost:3001/login', {
        email: Cemail,
        password: Cpassword,
        type: 'Login'
      })
      Router.push({
        pathname: '/product'
      })
    } catch {
      this.setState({
        currentUser: null,
        message: 'Login Fail'
      })
      console.log('fail')
    }
  }


  render() {
    const { profile, message, currentUser } = this.state
    return (
      <view >
        <div className="section container column is-one-third" style={{ background: "#FCEEDD", marginTop: "200px" }}>
          <p class="has-text-centered" style={{ color: "#FF0000" }}>{message}</p>
          <form onSubmit={this.onSubmit}>
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
            <div >
              <a>
                <button className="button is-rounded is-pulled-right" style={{ marginTop: "10px", background: "#F19671", color: "#FFFFFF" }}>Sign In</button>
              </a>
            </div>
          </form>
          <div >
            <a href="/Home">
              <button className="button is-rounded is-pulled-right" style={{ marginTop: "10px", background: "#F19671", color: "#FFFFFF" }}>Cancel</button>
            </a>
            <div >
            </div>
          </div>
        </div>
      </view>
    )
  }


}
export default LoginForm