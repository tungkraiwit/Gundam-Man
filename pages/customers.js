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
          <Fetch url="/customer">
            {data => {
              const customerList = data.map(customer => (
                <tr>
                  <td>{customer.customerNumber}</td>
                  <td>{customer.customerName}</td>
                </tr>
              ))
              return (
                <div style={{marginLeft:"50px" }}>
                <table class="table">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                      {customerList}
                  </tbody>
                </table>
                </div>
              )
            }}
          </Fetch>
        </Layout>
      </div>
    )
  }
}

export default Catalogs