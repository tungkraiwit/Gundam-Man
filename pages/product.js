import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import ScaleBar from '../components/scale-bar'
import Api from '../api'
import Popup from 'reactjs-popup'
import FormProduct from '../components/form-product'

const Catalogs = () => {
  const [vendor, setVendor] = useState(undefined)
  const [products, setProducts] = useState([])
  const [scale, setScale] = useState(undefined)
  // fetch products
  useEffect(async () => {
    const { data } = await Api.get('/products')
    setProducts(data)
  }, [])

  return (
    <div>
      <Layout>
        <Content title="Product" />
        <div class="field has-addons" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>
            <div class="control">
              <Popup
                trigger={<a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>ADD</a>}
                modal>
                {close => (
                  <span>
                    <FormProduct AddNew="products"/>
                    <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                    {/* <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button> */}
                  </span>
                )}
              </Popup>
            </div>
          </div>
        <ScaleBar
          onChange={(vendor, scale) => {
            setVendor(vendor)
            setScale(scale)
          }}
        />
        <table className="table" style={{ margin: "70px", marginTop: "0px" }}>
          <thead>
            <tr>
              <th align="center">Product code</th>
              <th align="center">Product Name</th>
              <th align="center">Product Line</th>
              <th align="center">Product Scale</th>
              <th align="center">Product Vendor</th>
              {/* <th align="center">Product Description</th> */}
              <th align="center">quantity In Stock</th>
              <th align="center">buyPrice</th>
              <th align="center">MSRP</th>
            </tr>
          </thead>

          {
            // filter
            products.filter(product => {
              if (!vendor) return true
              return product.product_vendor === vendor
            }).filter((product) => {
              if (!scale) return true
              return product.product_scale === scale
            }).map(product => {
              return (
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
                    {/* <td>
                      {product.product_description}
                    </td> */}
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
                          <h1 class="label" align="center" style={{ color: "#f19571", fontSize: "25px" }}>more information</h1>
                          <div class="columns" style={{ marginLeft: "80px", marginRight: "80px" }}>
                            <div class="column">
                              <p style={{ margin: "10px", fontSize: "15px"}}><strong >productCode        : </strong>{product.product_code}</p>
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong >productName        :</strong>{product.product_name}</p>
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong >productLine        :</strong> {product.product_line}</p>
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong >productScale       :</strong> {product.product_scale}</p>
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong >productVendor      :</strong> {product.product_vendor}</p>
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong >productDescription :</strong> {product.product_description}</p>
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong >quantityInStock    :</strong> {product.quantity_instock}</p>
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong >buyPrice           :</strong> {product.buy_price}</p>
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong >MSRP               :</strong> {product.msrp}</p>
                            </div>
                            <div class="column">
                              <p style={{ margin: "10px", fontSize: "15px" }}><strong>textDescription    : </strong>{product.text_description}</p>
                            </div>

                          </div>
                          <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>back</button>
                        </span>
                      )}
                    </Popup>
                  </tr>
                </tbody>
              )
            })
          }
          </table>
      </Layout>
    </div>
  )

}


export default Catalogs