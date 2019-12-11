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
                        {product.product_code}
                      </td>
                      <td>
                        {product.product_name}
                      </td>
                      <td>
                        {product.product_line}
                      </td>
                      <td>
                        {product.product_scale}
                      </td>
                      <td>
                        {product.product_vendor}
                      </td>
                      <td>
                        {product.product_description}
                      </td>
                      <td>
                        {product.quantity_instock}
                      </td>
                      <td>
                        {product.buy_price}
                      </td>
                      <td>
                        {product.msrp}
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
                              {/* <div style={{margin:"50px"}}>
                                <p>productCode        : {product.product_code}</p>
                                <p>productName        : {product.product_name}</p>
                                <p>productLine        : {product.product_line}</p>
                                <p>productScale       : {product.product_scale}</p>
                                <p>productVendor      : {product.product_vendor}</p>
                                <p>productDescription : {product.product_description}</p>
                                <p>quantityInStock    : {product.quantity_instock}</p>
                                <p>buyPrice           : {product.buy_price}</p>
                                <p>MSRP               : {product.msrp}</p>
                                <p>textDescription    : {product.text_description}</p>
                              </div> */}
                              <h1 class="label"  align="center" style ={{color: "#f19571", fontSize:"25px"}}>more information</h1>
                              <div class="columns" style={{marginLeft:"80px",marginRight:"80px"}}>
                                <div class="column">
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>productCode        : </strong>{product.product_code}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>productName        :</strong>{product.product_name}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>productLine        :</strong> {product.product_line}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>productScale       :</strong> {product.product_scale}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>productVendor      :</strong> {product.product_vendor}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>productDescription :</strong> {product.product_description}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>quantityInStock    :</strong> {product.quantity_instock}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>buyPrice           :</strong> {product.buy_price}</p>
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>MSRP               :</strong> {product.msrp}</p>
                                </div>
                                <div class ="column">
                                <p style={{margin:"10px",fontSize:"15px",color:"#f5b59d"}}><strong style={{color: "#f19571"}}>textDescription    : </strong>{product.text_description}</p>
                                </div>

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