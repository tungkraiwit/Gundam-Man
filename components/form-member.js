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
  async componentDidMount() {
    const sess = await Api.get('/session')
    this.setState({
      salesrepemployeeNumber: sess.data.employee_number
    })
  }
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
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Name" class="input" type="text" placeholder="Name" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Contact name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Firstname" class="input" type="text" placeholder="Firstname" style={{ padding: "0.5rem" }} />
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded">
                  <input onChange={this.onChange} name="Lastname" class="input" type="text" placeholder="Lastname" />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Phone</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="Phone" class="input" type="text" placeholder="Phone number" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Address1</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea onChange={this.onChange} name="Address1" class="textarea" placeholder="Address1"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Address2</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea onChange={this.onChange} name="Address2" class="textarea" placeholder="Address2"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">City</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="city" class="input" type="text" placeholder="city" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">State</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="state" class="input" type="text" placeholder="state" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
            <div class="field-label is-normal">
              <label class="label" style={{ marginLeft: "20px" }}>Postalcode</label>
            </div>
            <div class="field-body">
              <div class="field" style={{ paddingLeft: "0rem" }}>
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="postalcode" class="input" type="text" placeholder="postalcode" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Country</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="country" class="input" type="text" placeholder="country" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">CreditLimit</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="creditLimit" class="input" type="text" placeholder="creditLimit" style={{ padding: "0.5rem" }} />
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

export default FormMember
