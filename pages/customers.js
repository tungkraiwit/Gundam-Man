import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'

class Catalogs extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Customers"/>
          <Fetch url="/customer">
            { data => {
              return data.map(customer=> (
                <div>
                  <p>
                    Name: {customer.customerName}
                  </p>
                </div>
              ))
            }}
          </Fetch>
        </Layout>
      </div>
    )
  }
}

export default Catalogs