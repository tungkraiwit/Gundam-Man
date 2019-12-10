import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'


class Catalogs extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Product" />
          <table className="table" style={{margin:"70px",marginTop:"0px"}}>
            <thead>
              <tr>
                <th align="center">Product Code</th>
                <th align="center">Product Name</th>
                <th align="center">Product Line</th>
                <th align="center">Product Scale</th>
                <th align="center">Product Vendor</th>
                <th align="center">Product Description</th>
                <th align="center">quantity In Stock</th>
                <th align="center">buyPrice</th>
                <th align="center">MSRP</th>
               </tr>
              </thead>
              <Fetch url="/products">
                {data => {
                  return data.map(product => (
                    <tbody>
                    <tr>
                      <td>
                        {product.productCode}
                      </td>
                      <td>
                        {product.productName}
                      </td>
                      <td>
                        {product.productLine}
                      </td>
                      <td>
                        {product.productScale}
                      </td>
                      <td>
                        {product.productVendor}
                      </td>
                      <td>
                        {product.productDescription}
                      </td>
                      <td>
                        {product.quantityInStock}
                      </td>
                      <td>
                        {product.buyPrice}
                      </td>
                      <td>
                        {product.MSRP}
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

export default Catalogs