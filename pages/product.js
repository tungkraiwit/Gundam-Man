import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import ScaleBar from '../components/scale-bar'
import Api from '../api'

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
                    <th align="center">Product Description</th>
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
                <td>{product.product_code}</td>
                <td>{product.product_name}</td>
                <td>{product.product_line}</td>
                <td>{product.product_scale}</td>
                <td>{product.product_vendor}</td>
                <td>{product.product_description}</td>
                <td>{product.quantity_instock}</td>
                <td>{product.buy_price}</td>
                <td>{product.msrp}</td>
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