import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormEmployee from '../components/form-employee'

class Catalogs extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Employees" />

          <div class="field has-addons" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>
            <div class="control">
              <Popup
                trigger={<a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>ADD</a>}
                modal>
                {close => (
                  <span>
                    <FormEmployee AddNew="employees" />
                    <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                    {/* <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button> */}
                  </span>
                )}
              </Popup>
            </div>
          </div>

          <table className="table" style={{ margin: "100px", marginTop: "20px" }}>
            <thead>
              <tr>
                <th>Employees Number</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Extension</th>
                <th align="center">Email</th>
                <th>Office Code</th>
                <th>Reports To</th>
                <th align="center">Job Title</th>
              </tr>
            </thead>
            <Fetch url="/employees">
              {data => {
                return data.map(employees => (
                  <tbody>
                    <tr>
                      <td align="center">
                        {employees.employee_number}
                      </td>
                      <td>
                        {employees.first_name}
                      </td>
                      <td>
                        {employees.last_name}
                      </td>
                      <td>
                        {employees.extension}
                      </td>
                      <td>
                        {employees.email}
                      </td>
                      <td align="center">
                        {employees.office_code}
                      </td>
                      <td>
                        {employees.reports_to}
                      </td>
                      <td>
                        {employees.job_title}
                      </td>
                      <td>
                        <Popup
                          trigger={<a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>EDIT</a>}
                          modal>
                          {close => (
                            <span>
                              <FormEmployee AddNew="employees" job_title={employees.job_title}  employee_number={employees.employee_number}/>
                              <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                              {/* <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button> */}
                            </span>
                          )}
                        </Popup>
                      </td>
                    </tr>
                  </tbody>
                ))
              }}
            </Fetch>
          </table>
        </Layout>
      </div>
    )
  }
}

export default Catalogs