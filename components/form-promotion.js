import React from 'react'
import Api from '../api'
// import Router from 'next/router'

class FormPromotion extends React.Component {
  constructor() {
    super()
    this.state = {
      productCode: '',
      promotion: '',
      message:''
    }
  }
  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  onSubmit = e =>{
    // e.preventDefault()
    this.setState({
      productCode: this.props.productCode
    })
    console.log(this.props.productCode)
    this.Oncheck()    
  }
  async Oncheck(){
    try{
      await Api.post(`${this.props.AddNew}`, {
        data: this.state,
        type: 'promotion'
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
        <h1 class="label" align="center" style={{ color: "#f19571", fontSize: "25px", marginTop: "15px" }}>Add Promotion</h1>
        <div style={{ margin: "50px" }}>
          <p style={{ color: "#ff0000"}}>{this.state.message}</p>
          <div class="field is-horizontal">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Promotion</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select onChange={this.onChange} name="promotion" class="input">
                        <option  >-</option>
                        <option  >Buy 1 Get 1</option>
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

export default FormPromotion
