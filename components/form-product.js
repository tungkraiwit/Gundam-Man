import React from 'react'
import Api from '../api'
// import Router from 'next/router'

class FormMember extends React.Component {
  constructor() {
    super()
    this.state = {
      Name: '',
      Firstname: '',
      Lastname: '',
      Phone: '',
      Address1: '',
      Address2: '',
      city: '',
      state: '',
      postalcode: '',
      country: '',
      salesrepemployeeNumber: '',
      creditLimit: ''
    }
  }
  // async componentDidMount() {
  //   const sess = await Api.get('/session')
  //   this.setState({
  //     salesrepemployeeNumber: sess.data.employee_number
  //   })
  // }
  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  onSubmit = e => {
    // e.preventDefault()
    Api.post(`${this.props.AddNew}`, {
      data: this.state
    })
    // console.log(this.props.AddNew)
  }

  render() {
    return (
      <div className="content">
        <h1 class="label" align="center" style={{ color: "#f19571", fontSize: "25px",marginTop:"15px" }}>Add Product</h1>
        <div style={{ margin: "50px" }}>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Product name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductName" class="input" type="text" placeholder="Product name" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
            <div class="field-label is-normal">
              <label class="label" style={{marginLeft:"20px"}}>Product Scale</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductScale" class="input" type="text" placeholder="number : number" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label" >Product Line</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductLine" class="input" type="text" placeholder="Product Line" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
            <div class="field-label is-normal">
              <label class="label" style={{marginLeft:"20px"}}>Product Vendor</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductVendor" class="input" type="text" placeholder="Product Vendor" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">quantity In Stock</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="quantityInStock" class="input" type="text" placeholder="quantity In Stock" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
            <div class="field-label is-normal">
              <label class="label" style={{marginLeft:"20px"}}>buyPrice</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="buyPrice" class="input" type="text" placeholder="buyPrice" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
            <div class="field-label is-normal">
              <label class="label" style={{marginLeft:"20px"}}>MSRP</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="MSRP" class="input" type="text" placeholder="MSRP" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Product Description</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea onChange={this.onChange} name="Product Description" class="textarea" placeholder="Product Description"></textarea>
                </div>
              </div>
            </div>
          </div>   
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">text Description</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea onChange={this.onChange} name="text Description" class="textarea" placeholder="text Description"></textarea>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "50px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button>
      </div>
    )
  }
}

export default FormMember
