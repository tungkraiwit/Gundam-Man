import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormMember from '../components/form-member'

class Catalogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({ open: false });
  }  

  render() {
    return (
      <div>
        <Layout>
          <Content title="Customers" />

          <div class="field has-addons" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>
            <div class="control">
              <input class="input" type="text" placeholder="Find a product " />
            </div>
            <div class="control">
              <a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>
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
              </tr>
            </thead>
            <Fetch url="/customers">
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
                      <td>
                        <Popup
                          trigger={<button> more </button>}
                          modal
                        >
                          {close => (
                            <span>
                              {/* <button
                                  className="button is-pulled-right"
                                  onClick={() => {close()}}
                                >
                                  x
                                </button> */}
                              <div style={{margin:"50px"}}>
                                <p>customerNumber    : {customer.customerNumber}</p>
                                <p>customerName      : {customer.customerName}</p>
                                <p>contactLastName   : {customer.contactLastName}</p>
                                <p>contactFirstNmae  : {customer.contactFirstName}</p>
                                <p>Phone             : {customer.phone}</p>
                                <p>AddressLine1      : {customer.addressLine1}</p>
                                <p>AddressLine2      : {customer.addressLIne2}</p>
                                <p>city              : {customer.city}</p>
                                <p>state             : {customer.state}</p>
                                <p>PoatalCode        : {customer.postalCode}</p>
                                <p>Country           : {customer.country}</p>
                                <p>creditLimit       : {customer.creditLimit}</p>
                              </div>
                                <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px",marginLeft:"0px" ,background: "#F19671", color: "#FFFFFF" }} onClick={() => {close()}}>back</button>
                                <button className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >edit</button> 
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
      </div >
    )
  }
}


export default Catalogs