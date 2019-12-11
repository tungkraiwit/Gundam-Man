import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'


class Order extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Order" />
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
                      {/* <td>
                        <button>edit</button>
                      </td> */}
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