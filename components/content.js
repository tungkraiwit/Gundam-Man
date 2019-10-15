import React from 'react'

class Content extends React.Component {
  render() {

    const title = "Catalog"
    return (
      <div>
      <div className="columns">
        <div className="column" style={{margin: "1rem" , top: "0px"}}>
        <a className="button is-rounded is-pulled-right " style={{margin: '12px', color: 'white', background: '#F19671'}}>log out</a>
        <div className="is-centered is-size-3" style={{margin: '12px'}}>{title}</div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
        
        </div>
      </div>
      </div>
    )
  }
}

export default Content