import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormOrder from '../components/form-order'


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, AddNew: null };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({ open: false });
  }
  onSubmit = e => {
    e.preventDefault()
    console.log(this.state.AddNew)

  }
  render() {
    return (
      <div>
        <Layout>
          <Content title="Payment" />

          <table className="table" style={{ margin: "70px", marginTop: "0px" }}>
            <thead>
              <tr>
                <th align="center">Order Number</th>
                <th align="center">Customer Name</th>
                <th align="center">Check Number</th>
                <th align="center">Order Date</th>
                <th align="center">Required Date</th>
                <th align="center">Shipped Date</th>
                <th align="center">Amount</th>
              </tr>
            </thead>
            <Fetch url="/customers/payment">
              {data => {
                return data.map(payment => (
                  <tbody>
                    <tr>
                      <td>
                        {payment.order_number}
                      </td>
                      <td>
                        {payment.customer_name}
                      </td>
                      <td>
                        {payment.check_number}
                      </td>
                      <td>
                        {payment.order_date}
                      </td>
                      <td>
                        {payment.required_date}
                      </td>
                      <td>
                        {payment.shipped_date}
                      </td>
                      <td>
                        {payment.amount}
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