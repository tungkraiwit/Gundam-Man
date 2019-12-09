import React from 'react'

class RegisterForm extends React.Component {
  render() {
    return (
      <section className="section container" style={{ background: "#FEFAEF", marginTop: "30px" }}>
        <div className="columns is-centered">
          <div className="column is-half">
            <form>
              <div className="field">
                <td>
                  <label className="label" >User Name</label>
                  <div className="control">
                    <input className="input" type="name" name="name" />
                  </div>
                </td>
                <td >
                  <label style={{ marginLeft: "70px"}} className="label">Password</label>
                  <div className="control">
                    <input style={{ marginLeft: "70px"}} className="input" type="password" name="password" />
                  </div>
                </td>

              </div>
            </form>
            <from style={{ marginTop: "10px" }}>
              <div className="field is-grouped" >
                <a>
                  <button className="button is-rounded is-pulled-right" style={{ marginTop: "17px", background: "#F19671", color: "#FFFFFF" }}>Register</button>
                </a>
                <a href="/Home">
                  <button className="button is-rounded is-pulled-right" style={{ marginTop: "17px", background: "#F19671", color: "#FFFFFF" }}>Cancel</button>
                </a>
              </div>
            </from>
          </div>
        </div>
      </section>
    )
  }
}
export default RegisterForm