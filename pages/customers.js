import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormMember from '../components/form-member'

class Catalogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false , AddNew: null};
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({ open: false });
  }
  onSubmit = e =>{
    e.preventDefault()
    console.log(this.state.AddNew)
    
  }
  render() {
    return (
      <div>
        <Layout>
          <Content title="Customers" />

          {/* <div class="field has-addons" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>
            <div class="control">
              <input class="input" type="text" placeholder="Find a product " />
            </div>
            <div class="control">
              <a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>
                Search
              </a>
            </div>
          </div> */}

          <div class="field has-addons" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>
            <div class="control">
              <Popup
                trigger={<a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>ADD</a>}
                modal>
                {close => (
                  <span>
                    <FormMember AddNew="customers"/>
                    <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                    {/* <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button> */}
                  </span>
                )}
              </Popup>
            </div>
          </div>

          <table className="table" style={{ margin: "100px", marginTop: "10px" }}>
            <thead>
              <tr>
                <th align="center">Customer Number</th>
                <th align="center">Customer Name</th>
                <th align="center">Contact FirstName</th>
                <th align="center">Contact LastName</th>
                <th align="center">Phone</th>
              </tr>
            </thead>
            <Fetch url="/customers">
              {data => {
                return data.map(customer => (
                  <tbody>
                    <tr>
                      <td align="center">
                        {customer.customer_number}
                      </td>
                      <td align="center">
                        {customer.customer_name}
                      </td>
                      <td align="center">
                        {customer.contact_firstname}
                      </td>
                      <td align="center">
                        {customer.contact_lastname}
                      </td>
                      <td align="center">
                        {customer.phone}
                      </td>
                      <td>
                        <Popup
                          trigger={<button> more </button>}
                          modal
                          on="focus"

                        >
                          {close => (
                            <span>
                              <button
                                  className="button is-pulled-right"
                                  onClick={() => {close()}}
                                >
                                  x
<<<<<<< HEAD
                                </button> 
                              <div>
                               <h2 class="label"  align="center" style ={{color: "#f19571", fontSize:"25px"}}>more Information</h2>
                                <div class="columns">
                                <div class="column" style={{marginLeft:"80px"}}>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>customerNumber    :</strong>{customer.customer_number}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>customerName      : </strong>{customer.customer_name}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>contactLastName   : </strong>{customer.contact_lastname}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>contactFirstNmae  : </strong>{customer.contact_firstname}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>Phone             : </strong>{customer.phone}</p>
                                </div>
                                <div class="column">
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>AddressLine1      : </strong>{customer.addressLine1}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>AddressLine2      : </strong>{customer.addressLIne2}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>city              : </strong>{customer.city}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>state             : </strong>{customer.state}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>PoatalCode        : </strong>{customer.postalCode}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>Country           : </strong>{customer.country}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>creditLimit       : </strong>{customer.creditlimit}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>checkNumber       : </strong>{customer.check_number}</p>
                                </div>
                              </div>
                              </div> 
=======
                                </button> */}
                              <div style={{ margin: "50px" }}>
                                <p>customerNumber    : {customer.customer_number}</p>
                                <p>customerName      : {customer.customer_name}</p>
                                <p>contactLastName   : {customer.contact_lastname}</p>
                                <p>contactFirstNmae  : {customer.contact_firstname}</p>
                                <p>Phone             : {customer.phone}</p>
                                <p>AddressLine1      : {customer.addressLine1}</p>
                                <p>AddressLine2      : {customer.addressLIne2}</p>
                                <p>city              : {customer.city}</p>
                                <p>state             : {customer.state}</p>
                                <p>PoatalCode        : {customer.postalCode}</p>
                                <p>Country           : {customer.country}</p>
                                <p>creditLimit       : {customer.creditlimit}</p>
                                <p>checkNumber       : {customer.check_number}</p>
                              </div>
>>>>>>> 315420ad3ed0530ff41cea3be67ae107f660be22
                              <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>back</button>
                              {/* <button onClick={this.onClick} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >edit</button>  */}
                            </span>
                          )}
                        </Popup>
                      </td>
                      <td>
                        <Popup
                          trigger={<button> edit</button>}
                          modal>
                          {close => (
                            <span>
                              <FormMember />
                              <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>save</button>
                              <button className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >back</button>
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