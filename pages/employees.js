import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'


class Catalogs extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Customer" />
          <table border="1px" align="center">
            <th>
              <tr>
                <td align="center">Employees Number</td>
                <td align="center">FirstName</td>
                <td align="center">LastName</td>
                <td align="center">Extension</td>
                <td align="center">Email</td>
                <td align="center">Office Code</td>
                <td align="center">Reports To</td>
                <td align="center">Job Title</td>
              </tr>
              <Fetch url="/users">
                {data => {
                  return data.map(employees => (
                    <tr>
                      <td>
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
                      <td>
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
                  ))
                }}
              </Fetch>
            </th>
          </table>
        </Layout>
      </div>
    )
  }
}

export default Catalogs