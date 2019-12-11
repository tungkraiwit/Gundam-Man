import React from 'react'
import Page from '../components/form-product'
import Api from '../api'

class testOne extends React.Component {
  async onClick() {
    const CustomerName ='Australian Collectors, Co.'
    const dadadada = await Api.post('/orders', { data:  CustomerName})
    console.log(dadadada.data)
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>clickkkkkkk</button>
      </div>
    )

  }
}
export default testOne