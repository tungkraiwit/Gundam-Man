import React from 'react'
// import MainMenu from '../components/MainMenu'
import Layout from '../components/Layout'
import Content from '../components/content'


class Catalogs extends React.Component {
  render() {
    // const users = require('@sasirat/project-database').getCustomerNumber()
    // const users = db.getCustomerNumber()
    return (
      <div>
        <Layout>
        <Content />
        {/* {users} */}
        </Layout>
      </div>
    )
  }
}

export default Catalogs