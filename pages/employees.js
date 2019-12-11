import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import  FormEmployee from '../components/form-employee'

class Catalogs extends React.Component {  
  render() {    
    return (
      <div>
        <Layout>
          <Content title="Employees" />
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
                        {employees.lastName}
                      </td>
                      <td>
                        {employees.extension}
                      </td>
                      <td>
                        {employees.email}
                      </td>
                      <td align="center">
                        {employees.officeCode}
                      </td>
                      <td>
                        {employees.reportsTo}
                      </td>
                      <td>
                        {employees.jobTitle}
                      </td>
                      <td>
                      <Popup
                          trigger={<button> edit</button>}
                          modal>
                          {close => (
                            <span>
                              <FormEmployee />
                              <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>back</button>
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