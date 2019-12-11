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
              <label class="label">Product Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Product Name" class="input" type="text" placeholder="Product Name" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Product Line</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Product Line" class="input" type="text" placeholder="Product Line" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Product Scale</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Product Scale" class="input" type="text" placeholder="Product Scale" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Product Vendor</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Product Vendor" class="input" type="text" placeholder="Product Vendor" style={{ padding: "0.5rem" }} />
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
              <label class="label">quantity In Stock</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="quantity In Stock" class="input" type="text" placeholder="quantity In Stock" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">buyPrice</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="buyPrice" class="input" type="text" placeholder="buyPrice" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">MSRP</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="MSRP" class="input" type="text" placeholder="MSRP" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "50px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button>
      </div>
    )
  }
}

export default FormOder
