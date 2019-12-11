import React from 'react'
import Api from '../api'
// import Router from 'next/router'

class FormOder extends React.Component {
  constructor() {
    super()
    this.state = {
      OrderNumber: '',
      OrderDate: '',
      RequiredDate: '',
      ShippedDate: '',
      status: 'in progress',
      QuantityOrdered: '',
      PriceEach: '',
      CustomerName: '',
      Comment: '',
      employee_number: ''
    }
  }
  async componentDidMount() {
    const sess = await Api.get('/session')
    this.setState({
      employee_number: sess.data.employee_number
    })
  }
  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  onSubmit = e => {
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
              <label class="label">Required Date</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="RequiredDate" class="input" type="date" placeholder="Required Date" />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">ShippedDate</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ShippedDate" class="input" type="date" placeholder="Shipped Date" />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Quantity Ordered</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="QuantityOrdered" class="input" type="number" min="0" placeholder="Quantity Ordered" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">PriceEach</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="PriceEach" class="input" type="text" placeholder="Price Each" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Customer Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="CustomerName" class="input" type="text" placeholder="Customer Name" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Comment</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea onChange={this.onChange} name="Comment" class="textarea" placeholder="Comment"></textarea>
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
