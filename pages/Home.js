import React from 'react'
import Fetch from '../components/fetch'

class Home extends React.Component {
  render() {
    return (
      <div className="columns" style={{ background: "#FEFAEF" }}>
        <div className="column">
          <div className="columns is-mobile " style={{ marginLeft: "70px", marginRight: "70px" }}>
            <div style={{ marginTop: "30px", marginLeft: "50px" }}>
              <a href="/Home" >
                <h1 style={{ fontSize: "50px", color: "#204F5F" }}>GUNDUM MAN</h1>
              </a>
            </div>
            <div className="column" style={{ marginTop: "30px" }}>
              {/* <a href="/Register">
                <button className="button is-rounded is-pulled-right" style={{ marginTop: "17px", background: "#F19671", color: "#FFFFFF" }}>Register</button>
              </a> */}
              <a href="/Login">
                <button className="button is-rounded is-pulled-right" style={{ marginTop: "17px", background: "#F19671", color: "#FFFFFF" }}>Log in</button>
              </a>
            </div>
          </div>
          <hr style={{ marginLeft: "200px", marginRight: "200px" }}></hr>
          <div className="columns" style={{ marginLeft: "170px", marginRight: "170px" }}>
            <div className="column">
              <Fetch url="/product">
                {data => {
                  const productList = data.map(product => (
                    <div className="column is-3">
                      <div class="card" style={{ border: "none" }}>
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" ></img>
                          </figure>
                        </div>
                        <div class="card-content">
                          <p>{product.productName}</p>
                        </div>
                      </div>
                    </div>
                  ))
                  return (
                    <div className="columns is-multiline" is-mobile>
                      {productList}
                    </div>
                  )
                }}
              </Fetch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home