//Created by "rcc" snippet

import React, { Component } from 'react'

export default class Main extends Component {

    state={name:"Alp"}

    //Created by "rconst" snippet
    constructor(props) {
      super(props)
     console.log("constructor runned.")
     console.log("Const.Props.",props)
      this.state = { name:"Korhan"
         
      }
    }
 
  render() {
      console.log("Component Rendered.")
    return (
      <div>Main
          <h5>{this.state.name}</h5>
      </div>
    )
  }
}
