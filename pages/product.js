import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'

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
                      <Popup
                          trigger={<button> more </button>}
                          modal
                        >
                          {close => (
                            <span>
                              {/* <button
                                  className="button is-pulled-right"
                                  onClick={() => {close()}}
                                >
                                  x
                                </button> */}
                              <div style={{margin:"50px"}}>
                                <p>productCode    : {product.productCode}</p>
                                <p>productName      : {product.productName}</p>
                                <p>productLine   : {product.productLine}</p>
                                <p>productScale  : {product.productScale}</p>
                                <p>productVendor             : {product.productVendor}</p>
                                <p>productDescription      : {product.productDescription}</p>
                                <p>quantityInStock      : {product.quantityInStock}</p>
                                <p>buyPrice              : {product.buyPrice}</p>
                                <p>MSRP             : {product.MSRP}</p>
                                <p>textDescription             : {product.textDescription}</p>
                              </div>
                                <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px",marginLeft:"0px" ,background: "#F19671", color: "#FFFFFF" }} onClick={() => {close()}}>back</button>
                            </span>
                          )}
                        </Popup>
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