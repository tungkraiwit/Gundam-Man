import React from 'react'
import MainMenu from '../components/MainMenu'
import Layout from '../components/Layout'
import Content from '../components/content'

class Catalogs extends React.Component {
  render() {
    return (
      <div>
        <Layout>
        <Content />
        </Layout>
      </div>
    )
  }
}

export default Catalogs