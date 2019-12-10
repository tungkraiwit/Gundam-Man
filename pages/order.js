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
                <th align="center">ProductCode</th>
                <th align="center">Quantity Ordered</th>
                <th align="center">PriceEach</th>
                <th align="center">status</th>
                <th align="center">Comments</th>
                <th align="center">Comments</th>
               </tr>
              </thead>
              <Fetch url="/orders">
                {data => {
                  return data.map(orders => (
                    <tbody>
                    <tr>
                      <td>
                        {orders.orderNumber}
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

export default Order