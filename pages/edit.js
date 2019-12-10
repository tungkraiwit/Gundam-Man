import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormMember from '../components/form-member'
import Router from 'next/router'

class Catalogs extends React.Component {  
  render() {
    console.log(Router)
    return (
      <div>
        <Layout>
          <Content title="Employees" />
          <table className="table" style={{ margin: "100px", marginTop: "20px" }}>
            <FormMember />            
          </table>
        </Layout>
      </div>
    )
  }
}

export default Catalogs