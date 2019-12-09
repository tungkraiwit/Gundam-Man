import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'

class Catalogs extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Customers" />
          <table border="1px">
            <th>
              <tr>
                <td align="center">Customer Number</td>
                <td align="center">Customer Name</td>
                <td align="center">Contact FirstName</td>
                <td align="center">Contact LastName</td>
                <td align="center">Phone</td>
                <td align="center">AddressLine1</td>
                <td align="center">AddressLine2</td>
                <td align="center">City</td>
                <td align="center">State</td>
                <td align="center">PostalCode</td>
                <td align="center">Country</td>
                <td align="center">SalesRep Employee Number</td>
                <td align="center">Credit Limit</td>
              </tr>
              <Fetch url="/customer">
                {data => {
                  return data.map(customer => (
                    <tr>
                      <td>
                        {customer.customerNumber}
                      </td>
                      <td>
                        {customer.customerName}
                      </td>
                      <td>
                        {customer.contactFirstName}
                      </td>
                      <td>
                        {customer.contactLastName}
                      </td>
                      <td>
                        {customer.phone}
                      </td>
                      <td>
                        {customer.addressLine1}
                      </td>
                      <td>
                        {customer.addressLine2}
                      </td>
                      <td>
                        {customer.city}
                      </td>
                      <td>
                        {customer.state}
                      </td>
                      <td>
                        {customer.postalCode}
                      </td>
                      <td>
                        {customer.country}
                      </td>
                      <td>
                        {customer.salesRepEmployeeNumber}
                      </td>
                      <td>
                        {customer.creditLimit}
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
      </div >
    )
  }
}

export default Catalogs