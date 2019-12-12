import React from 'react'
import Api from '../api'

// import Router from 'next/router'

class FormUpOder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_number: '',
      status: '',
      customer_number: '',
      order_number: '',
      message: '',
      price_each:''
    }
  }
  async componentDidMount() {
    const sess = await Api.get('/session')
    this.setState({
      employee_number: sess.data.employee_number
    })
  }
  closeModal() {
    this.setState({ open: false });
  }
  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  onSubmit = e => {
    // e.preventDefault()
    // console.log(this.state.AddNew)
    this.setState({
      customer_number: this.props.customer_number,
      order_number: this.props.order_number,
      price_each: this.props.price_each
    })
    this.Oncheck()
  }
  async Oncheck() {
    // await Api.post(`${this.props.AddNew}`, {
    //   data: this.state,
    //   type: 'update'
    // })
    try {
      await Api.post(`${this.props.AddNew}`, {
        data: this.state,
        type: 'update'
      })
      console.log("Success")
      this.setState({
        message: 'Success'
      })
    } catch {
      console.log("fail")
      this.setState({
        message: 'Fail'
      })
    }
  }
  render() {
    return (
      <div className="content">
        <h1 class="label" align="center" style={{ color: "#f19571", fontSize: "25px", marginTop: "15px" }}>Update Status</h1>
        <div style={{ margin: "50px" }}>
          <p style={{ color: "#ff0000" }}>{this.state.message}</p>
          <div class="field is-horizontal">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Status</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select onChange={this.onChange} name="status" class="input">
                        <option>in process</option>
                        <option>on hold</option>
                        <option>resolved</option>
                        <option> cancelled</option>
                        <option>disputed</option>
                        <option>shipped</option>
                        <option style={{ color: "#ff0000"}}selected="selected">{this.props.status}</option>
                      </select>
                    </div>
                  </div>
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

export default FormUpOder