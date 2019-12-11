import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormOrder from '../components/form-order'


class Order extends React.Component {
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
          <Content title="Order" />

          <div class="field has-addons" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>
            <div class="control">
              <Popup
                trigger={<a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>ADD</a>}
                modal>
                {close => (
                  <span>
                    <FormOrder AddNew="orders"/>
                    <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                    {/* <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button> */}
                  </span>
                )}
              </Popup>
            </div>
          </div>

          <table className="table" style={{margin:"70px",marginTop:"0px"}}>
            <thead>
              <tr>
                <th align="center">Order Number</th>
                <th align="center">Order Date</th>
                <th align="center">Required Date</th>
                <th align="center">Shipped Date</th>
                <th align="center">status</th>
                <th align="center">Quantity Ordered</th>
                <th align="center">Price Each</th>
                <th align="center">Customer Name</th>
               </tr>
              </thead>
              <Fetch url="/orders">
                {data => {
                  return data.map(orders => (
                    <tbody>
                    <tr>
                      <td>
                        {orders.order_number}
                      </td>
                      <td>
                        {orders.order_date}
                      </td>
                      <td>
                        {orders.required_date}
                      </td>
                      <td>
                        {orders.shipped_date}
                      </td>
                      <td>
                        {orders.status}
                      </td>
                      <td align="center">
                        {orders.quantity_ordered}
                      </td>
                      <td>
                        {orders.price_each}
                      </td>
                      <td>
                        {orders.customer_name}
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

export default Order