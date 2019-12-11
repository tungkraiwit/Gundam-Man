import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'
import Popup from 'reactjs-popup'
import FormOrder from '../components/form-order'

// import Router from 'next/router'

class FormUpOder extends React.Component {
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
            <div className="content">
                <h1  class="label" align="center" style={{ color: "#f19571", fontSize: "25px",marginTop:"15px" }}>Update Order</h1>
                <div style={{ margin: "50px" }}>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Order Date</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input onChange={this.onChange} name="OrderDate" class="input" type="date" placeholder="Order Date" />
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
                <button className="button is-pulled-right is-rounded" style={{ margin: "50px", marginTop: "0px", marginLeft: "0px", background: "#F19671", color: "#FFFFFF" }} onClick={() => { close() }}>Cancel</button>
            </div>
        )
    }
}

export default FormUpOder