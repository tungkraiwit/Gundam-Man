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
          <table border="1px">
            <th>
              <tr>
                <td align="center">Product Code</td>
                <td align="center">Product Name</td>
                <td align="center">Product Line</td>
                <td align="center">Product Scale</td>
                <td align="center">Product Vendor</td>
                <td align="center">Product Description</td>
                <td align="center">quantity In Stock</td>
                <td align="center">buyPrice</td>
                <td align="center">MSRP</td>
              </tr>
              <Fetch url="/product">
                {data => {
                  return data.map(product => (
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
                  ))
                }}
              </Fetch>
            </th>
          </table>
        </Layout>
      </div>
    )
  }
}

export default Catalogs