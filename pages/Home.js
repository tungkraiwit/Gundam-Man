import React from 'react'
import Fetch from '../components/fetch'

class Home extends React.Component {
  render() {
    return (
      <div className="columns" style={{ marginLeft: "200px", marginRight: "200px" }}>
        <div className="column">
          <div className="columns is-mobile">
            <div className="column" style={{ marginTop: "70px" }}>
              <h1 style={{fontSize:"50px"}}>GUNDUM MAN</h1>
            </div>
            <div className="column" style={{ marginTop: "70px" }}>
              <button className="button is-rounded is-pulled-right">Log in</button> 
            </div>
            </div>
            <div className="columns">
            <div className="column is-3">
        <article class="message " style={{background:"#FEFAEF"}}>
            <div class="message-header" style={{background:"#F19671"}}>
                <p>Categories</p>
            </div>
            <div class="message-body">
                <div class="board-item">
                    <div class="board-item-content"><span>The Fort</span></div>
                </div>
                <div class="board-item">
                    <div class="board-item-content"><span>Fist Like a bullet</span></div>
                </div>
                <div class="board-item">
                    <div class="board-item-content"><span>White Stork Spreads Wings</span></div>
                </div>
                <div class="board-item">
                    <div class="board-item-content"><span>Two Tigers Subdue Dragons</span></div>
                </div>
                <div class="board-item">
                    <div class="board-item-content"><span>Snake Creeps Down</span></div>
                </div>
                <div class="board-item">
                    <div class="board-item-content"><span>Hand of Five Poisons</span></div>
                </div>
            </div>
        </article>
    

            </div>
            <div className="column">
          
            <Fetch url="/product">
              {data => {
                const productList = data.map(product => (
                  <div className="column is-4">
                  <div class="card">
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