import React from 'react'
import Api from '../api'
import Fetch from '../components/fetch'

// import Router from 'next/router'

class FormUpOder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_number: '',
      job_title: '',
      message: '',
      jobTitle: ''
    }
  }
  async componentDidMount() {
    const eiei = await Api.get('/session')
    this.setState({
      jobTitle: eiei.data.job_title
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
    this.Oncheck()
  }
  async Oncheck() {
    this.setState({
      employee_number: this.props.employee_number
    })
    try {
      await Api.post(`${this.props.AddNew}`, {
        data: this.state,
        type: 'EDITJOB'
      })
      console.log("Success")
      this.setState({
        message: 'Success'
      })
    } catch {
      console.log("fail")
      this.setState({
        message: ''
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
                      <select onChange={this.onChange} name="job_title" class="input">
                        <option>VP Sales</option>
                        <option>VP Marketing</option>
                        <option>Sales Manager (APAC)</option>
                        <option>Sale Manager (EMEA)</option>
                        <option>Sales Manager (NA)</option>
                        <option>Sales Rep</option>
                        <option style={{ color: "#ff0000" }} selected="selected">{this.props.job_title}</option>
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