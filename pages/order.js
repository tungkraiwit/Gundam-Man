import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormOrder from '../components/form-order'
import FormUpOder from '../components/updateform-order'


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, AddNew: null };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({ open: false });
  }
  onSubmit = e => {
    e.preventDefault()
    console.log(this.state.AddNew)

  }
  render() {
    return (
      <div>
        <Layout>
          <Content title="Order" />

          <div class="field has-addons" style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>
            <div class="control">
              <Popup
                trigger={<a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>ADD</a>}
                modal>
                {close => (
                  <span>
                    <FormOrder AddNew="orders" />
                    <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                    {/* <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button> */}
                  </span>
                )}
              </Popup>
            </div>
          </div>

          <table className="table" style={{ margin: "70px", marginTop: "0px" }}>
            <thead>
              <tr>
                <th align="center">Order Number</th>
                <th align="center">Order Date</th>
                <th align="center">Required Date</th>
                <th align="center">Shipped Date</th>
                <th align="center">status</th>
                <th align="center">Quantity Ordered</th>
                <th align="center">Price Each</th>
                <th align="center">Customer Name</th>
                <th align="center">update</th>
              </tr>
            </thead>
            <Fetch url="/orders">
              {data => {
                return data.map(orders => (
                  <tbody>
                    <tr>
                      <td>
                        {orders.order_number}
                      </td>
                      <td>
                        {orders.order_date}
                      </td>
                      <td>
                        {orders.required_date}
                      </td>
                      <td>
                        {orders.shipped_date}
                      </td>
                      <td>
                        {orders.status}
                      </td>
                      <td align="center">
                        {orders.quantity_ordered}
                      </td>
                      <td>
                        {orders.price_each}
                      </td>
                      <td>
                        {orders.customer_name}
                      </td>
                      <Popup
                        trigger={<a class="button " style={{ background: "#F19671", color: "#FFFFFF" }}>update Status</a>}
                        modal>
                        {close => (
                          <span>
                            <FormUpOder price_each={orders.price_each} AddNew="orders" status={orders.status} order_number={orders.order_number} customer_number={orders.customer_number} />
                            <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                            {/* <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "5px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Customer</button> */}
                          </span>
                        )}
                      </Popup>

                      {/* <Popup
                        trigger={<button> update </button>}
                        modal
                      >
                        {close => (
                          <span>

                            <div className="content">
                              <h1 class="label" align="center" style={{ color: "#f19571", fontSize: "25px", marginTop: "15px" }}>Update Order</h1>
                              <div style={{ margin: "50px" }}>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Order Date</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <p class="control is-expanded has-icons-left">
                                        <input onChange={this.onChange} name="OrderDate" class="input" type="date" value={orders.order_date} />
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Required Date</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field">
                                      <p class="control is-expanded has-icons-left">
                                        <input onChange={this.onChange} name="RequiredDate" class="input" type="date" value={orders.required_date} />
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
                                        <input onChange={this.onChange} name="ShippedDate" class="input" type="date" value={orders.shipped_date} />
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
                                        <input onChange={this.onChange} name="QuantityOrdered" class="input" type="number" min="0" value={orders.quantity_ordered} style={{ padding: "0.5rem" }} />
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
                                        <input onChange={this.onChange} name="PriceEach" class="input" type="text" value={orders.price_each} style={{ padding: "0.5rem" }} />
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div class="field is-horizontal">
                                  <div class="field-label is-normal">
                                    <label class="label">Status</label>
                                  </div>
                                  <div class="field-body">
                                    <div class="field is-narrow">
                                      <div class="control">
                                        <div class="select is-fullwidth">
                                          <select>
                                            <option>in process</option>
                                            <option>on hold</option>
                                            <option>resolved</option>
                                            <option> cancelled</option>
                                            <option>disputed</option>
                                            <option>shipped</option>
                                            <option selected="selected">{orders.status}</option>
                                          </select>
                                        </div>
                                      </div>
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
                                        <input onChange={this.onChange} name="CustomerName" class="input" type="text" value={orders.customer_name} style={{ padding: "0.5rem" }} />
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
                                        <textarea onChange={this.onChange} name="Comment" class="textarea" value={orders.comments}></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>


                              </div>
                              <button onClick={this.onSubmit} className="button is-pulled-right is-rounded" style={{ marginRight: "50px", marginTop: "0px", background: "#F19671", color: "#FFFFFF" }} >Save Order</button>
                              <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
                            </div>

                          </span>
                        )}
                      </Popup> */}
                    </tr>
                  </tbody>
                ))
              }}
            </Fetch>
          </table>
        </Layout>
      </div>
    )
  }
}

export default Order