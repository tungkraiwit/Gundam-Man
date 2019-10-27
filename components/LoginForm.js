import React from 'react'

class LoginForm extends React.Component {
  render() {
    return (
      <section className="section container">
        <div className="columns is-centered">
          <div className="column is-half">
            <form>
              <div className="field">
                <label className="label" >User Name</label>
                <div className="control">
                  <input className="input" type="name" name="name" />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>                
                <div className="control">                  
                  <input className="input" type="password" name="password" />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control" >
                  <button className="button is-link">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default LoginForm