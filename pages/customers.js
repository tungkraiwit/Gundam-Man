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
                          closeOnDocumentClick >
                         <FormMember/>
                         <button className="button is-pulled-right is-rounded" style={{margin:"50px", marginTop:"0px",background:"#F19671",color:"#FFFFFF"}}>Save Change</button> 
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