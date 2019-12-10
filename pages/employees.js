import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'


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
                        {employees.employeeNumber}
                      </td>
                      <td>
                        {employees.firstName}
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
                        <button>edit</button>
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