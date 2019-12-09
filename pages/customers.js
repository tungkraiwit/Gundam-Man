import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormMember from '../components/form-member'


class Catalogs extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Customers" />

          <div class="field has-addons" style={{marginTop:"0px",marginBottom:"0px",marginLeft:"100px"}}>
            <div class="control">
              <input class="input" type="text" placeholder="Find a product " />
            </div>
            <div class="control">
              <a class="button " style={{background:"#F19671",color:"#FFFFFF"}}>
                Search
              </a>
            </div>
          </div>

          <table className="table" style={{ margin: "100px", marginTop: "10px" }}>
            <thead>
              <tr>
                <th align="center">Customer Number</th>
                <th align="center">Customer Name</th>
                <th align="center">Contact FirstName</th>
                <th align="center">Contact LastName</th>
                <th>Phone</th>
                {/* <th align="center">AddressLine1</th>
                <th align="center">AddressLine2</th>
                <th align="center">City</th>
                <th align="center">State</th>
                <th align="center">PostalCode</th>
                <th align="center">Country</th>
                <th align="center">SalesRep Employee Number</th>
                <th align="center">Credit Limit</th> */}
              </tr>
            </thead>
            <Fetch url="/customer">
              {data => {
                return data.map(customer => (
                  <tbody>
                    <tr>
                      <td align="center">
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
                      {/* <td>
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
                      </td> */}
                      <td>
                        <Popup
                          trigger={<button> more </button>}
                          modal
                          closeOnDocumentClick >
                          <FormMember />
                          <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }}>Save Change</button>
                        </Popup>
                      </td>
                    </tr>
                  </tbody>
                ))
              }}
            </Fetch>
          </table>
        </Layout>
      </div >
    )
  }
}


export default Catalogs