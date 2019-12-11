import React from 'react'
import Api from '../api'
// import Router from 'next/router'

class FormOder extends React.Component {
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
        <h1 class="label" align="center" style={{ color: "#f19571", fontSize: "25px",marginTop:"15px" }}>Order Products</h1>
        <div style={{ margin: "50px" }}>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Product Code</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Product Code" class="input" type="text" placeholder="Product Code" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">amount</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="amount" class="input" type="text" placeholder="Product Name" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">required Date</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="required Date" class="input" type="date" placeholder="Product Line"  />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">shiped Date</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="shiped Date" class="input" type="date" placeholder="shiped Date"  />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Customer Code</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Customer Code" class="input" type="text" placeholder="Product Vendor" style={{ padding: "0.5rem" }} />
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
                  <textarea onChange={this.onChange} name="Product Description" class="text" placeholder="Product Description"></textarea>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "50px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Order</button>
      </div>
    )
  }
}

export default FormOder
