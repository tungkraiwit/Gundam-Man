import React, { useState, useEffect } from 'react'
import { Dropdown, DropdonwMenu } from '../components/dropdown'
import Api from '../api'
import Fetch from './fetch'
import { async } from 'q'

const ScaleBar = ({ onChange }) => {
  // const option = ["Min Lin Diecast","Classic Metal Creations","Highway 66 Mini Classics","Red Start Diecast","Motor City Art Classics","Second Gear Diecast","Autoart Studio Design","Welly Diecast Productions","Unimax Art Galleries","Studio M Art Models","Exoto Designs","Gearbox Collectibles","Carousel DieCast Legends"]
  const [vendors, setVendors] = useState([])
  const [scales, setScales] = useState([])
  const [vendor, setVendor] = useState(undefined)
  const [scale, setScale] = useState(undefined)

  useEffect(async () => {
    const { data } = await Api.get('/products/vendor')
    setVendors([null, ...data])
  }, []);
  useEffect(async () => {
    const { data } = await Api.get('/products/scale')
    setScales([null, ...data])
  }, []);
  // send value out
  useEffect(() => {
    onChange(vendor, scale)
  })

  return (
    <div className="columns" style={{ margin: "50px", marginTop: "0px", marginBottom: "20px" }}>
      <div className="column is-4" style={{ display: 'flex' }}>
        <div style={{ margin: 'auto 0.5rem' }}>
          <h1>Vendor : </h1>
        </div>
        <Dropdown title="Select vendor" placeholder={vendor}>
          <DropdonwMenu
            list={vendors}
            onClick={value => {
              setVendor(value)
            }}
          />
        </Dropdown>
      </div>
      <div className="column" style={{ display: 'flex' }}>
        <div style={{ margin: 'auto 0.5rem' }}>
          <h1>Scale : </h1>
        </div>
        <Dropdown title="Select Scale" placeholder={scale}>
          <DropdonwMenu
            list={scales}
            onClick={(value) => {
              setScale(value)
            }}
          />
        </Dropdown>
      </div>
    </div>
  )
}

export default ScaleBar