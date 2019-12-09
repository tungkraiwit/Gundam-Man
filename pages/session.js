import React from 'react'
import axios from 'axios'

import fetch from 'isomorphic-unfetch'
import { async } from 'q'

class Session extends React.Component {
  state = {
    result: 0
  }

  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:3001/users/session', {
      method: 'GET',
      credentials: 'include',
    });
    console.log(res)
    const user = await res
    return { user };
  }

  // async componentDidMount() {
  //   const res = await axios('http://localhost:3001/users/session')
  //     .then(res => {
  //       console.log(res.headers)
  //       return 'ok'
  //     })
  //     .catch(err => {
  //       return '401'
  //     })
    
  //   this.setState({ result: res })
  // }

  render() {
    return <p>{this.state.result}</p>
  }

}

// Session.getInitialProps(ctx) = async () {
//   const res = await fetch('path/to/endpoint', {
//     headers: {
//       cookie: ctx.req.headers.cookie,
//     },
//   });
//   const user = await res.json();
//   return { user };
// }

export default Session