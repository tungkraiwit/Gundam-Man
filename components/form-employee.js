import React from 'react'

class FormEmployee extends React.Component {
  render (){
    return (
      <div className="content">
        <h1  class="label" align="center" style={{ color: "#f19571", fontSize: "25px", marginTop: "15px" }}>Add Employees</h1>
        <div style={{ margin: "50px" }}>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">employee numbner</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductCode" class="input" type="text" placeholder="employee number" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">First name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductName" class="input" type="text" placeholder="first Name" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">last name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductLine" class="input" type="text" placeholder="last name" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">extention</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductScale" class="input" type="text" placeholder="extention" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductVendor" class="input" type="email" placeholder="email" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">office code</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="ProductVendor" class="input" type="text" placeholder="office code" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">report to</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="quantityInStock" class="input" type="text" placeholder="report to" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div>
          {/* <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">job title</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input onChange={this.onChange} name="buyPrice" class="input" type="text" placeholder="job title" style={{ padding: "0.5rem" }} />
                </p>
              </div>
            </div>
          </div> */}
          <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">job title</label>
                        </div>
                        <div class="field-body">
                            <div class="field is-narrow">
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select>
                                            <option>Sales Rep</option>
                                            <option>Sales Manager (NA)</option>
                                            <option>Sale Manager (EMEA)</option>
                                            <option>Sales Manager (APAC)</option>
                                            <option>VP Marketing</option>
                                            <option>VP Sales</option>
                                            <option>President</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        </div>
        <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "50px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save</button>
      </div>
    )
  }
}

export default FormEmployee
