import React, { Component } from 'react'
import { PICTUREPATHS } from '../App'

export default class ChoosePicture extends Component {
  render() {
var src = PICTUREPATHS[this.props.currentPic];
    return (
      <div>
          <p>Cute Pictures</p>
          <img src={src} alt="cute"/>
          <button>START</button>
          <button onClick={}>STOP</button>
      </div>
    )
  }
}
