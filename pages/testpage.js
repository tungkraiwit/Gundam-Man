import React from 'react'
import bcrypt from 'bcryptjs'
// const salt = bcrypt.genSaltSync(10);
// var password = "testpassword"
// const hash = bcrypt.hashSync(password, salt);

class testOne extends React.Component {
  render() {
    // var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0/\/", salt);
    console.log(hash)
    // bcrypt.genSalt(10, function (err, salt) {
    //   bcrypt.hash(password, salt, function (err, hash) {
    //     // Store hash in your password DB.
    //     console.log(hash)
    //   });
    // });
    // console.log(bcrypt.compareSync(password, hash))
    // console.log( bcrypt.compareSync("not_bacon", hash))
    console.log(bcrypt.compareSync("B4c0/\/", hash))


    return (
      <div>
        {bcrypt.compareSync("B4c0/\/", hash)}5
        
      </div>
    )

  }
}
export default testOne