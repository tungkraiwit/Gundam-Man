import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import Promotion from '../components/form-promotion'

class Catalogs extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Employees" />

          <table className="table" style={{ margin: "70px", marginTop: "0px" }}>
            <thead>
              <tr>
                <th align="center">Product code</th>
                <th align="center">Product Name</th>
                <th align="center">quantity instock</th>
                <th align="center">buy price</th>
                <th align="center">promotion</th>
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
                        {product.quantity_instock}
                      </td>
                      <td>
                        {product.buy_price}
                      </td>
                      <td>
                        {product.promotion}
                      </td>
                      <div class="field has-addons" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "0px" }}>
                        <div class="control">
                          <Popup
                            trigger={<a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>Add Promotion</a>}
                            modal>
                            {close => (
                              <span>
                                <Promotion AddNew="products" productCode={product.product_code}/>
                                <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                                {/* <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button> */}
                              </span>
                            )}
                          </Popup>
                        </div>
                      </div>
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