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
                          trigger={<button> edit</button>}
                          modal>
                          {close => (
                            <span>
                              <div className="content">
                                <h1 class="label" align="center" style={{ color: "#f19571", fontSize: "25px", marginTop: "15px" }}>Add Employees</h1>
                                <div style={{ margin: "50px" }}>
                                  <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                      <label class="label">employee numbner</label>
                                    </div>
                                    <div class="field-body">
                                      <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                          <input onChange={this.onChange} name="ProductCode" class="input" type="text" value={employees.employee_number} style={{ padding: "0.5rem" }} />
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                      <label class="label">First name</label>
                                    </div>
                                    <div class="field-body">
                                      <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                          <input onChange={this.onChange} name="ProductName" class="input" type="text" value={employees.first_name} style={{ padding: "0.5rem" }} />
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                      <label class="label">last name</label>
                                    </div>
                                    <div class="field-body">
                                      <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                          <input onChange={this.onChange} name="ProductLine" class="input" type="text" value={employees.last_name} style={{ padding: "0.5rem" }} />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                      <label class="label">extention</label>
                                    </div>
                                    <div class="field-body">
                                      <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                          <input onChange={this.onChange} name="ProductScale" class="input" type="text" value={employees.extension} style={{ padding: "0.5rem" }} />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                      <label class="label">email</label>
                                    </div>
                                    <div class="field-body">
                                      <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                          <input onChange={this.onChange} name="ProductVendor" class="input" type="email"value={employees.email} style={{ padding: "0.5rem" }} />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                      <label class="label">office code</label>
                                    </div>
                                    <div class="field-body">
                                      <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                          <input onChange={this.onChange} name="ProductVendor" class="input" type="text"value={employees.office_code} style={{ padding: "0.5rem" }} />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                      <label class="label">report to</label>
                                    </div>
                                    <div class="field-body">
                                      <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                          <input onChange={this.onChange} name="quantityInStock" class="input" type="text" value={employees.reports_to} style={{ padding: "0.5rem" }} />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <div class="field is-horizontal">
                                      <div class="field-label is-normal">
                                        <label class="label">job title</label>
                                      </div>
                                      <div class="field-body">
                                        <div class="field">
                                          <p class="control is-expanded has-icons-left">
                                            <input onChange={this.onChange} name="buyPrice" class="input" type="text" placeholder="job title" style={{ padding: "0.5rem" }} />
                                          </p>
                                        </div>
                                      </div>
                                    </div> */}
                                  <div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                      <label class="label">job title</label>
                                    </div>
                                    <div class="field-body">
                                      <div class="field is-narrow">
                                        <div class="control">
                                          <div class="select is-fullwidth">
                                            <select>
                                              <option>Sales Rep</option>
                                              <option>Sales Manager (NA)</option>
                                              <option>Sale Manager (EMEA)</option>
                                              <option>Sales Manager (APAC)</option>
                                              <option>VP Marketing</option>
                                              <option>VP Sales</option>
                                              <option>President</option>
                                              <option selected="selected">{employees.job_title}</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                                <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "50px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save</button>
                              </div>
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