import React, { Component } from 'react'

export default class Classstate extends Component {
    constructor(){
        super();
           this.state=
            {
                data:"poonam"
            }

        }
        updatedata=()=>{
          this.setState({
            data:"sfsdg gf thfgth jyg jy j"
          }      )
        
    }
  render() {
    return (
      <div>
        {/* <h1>{this.state.data+1}</h1> */}
        <h1>{this.state.data}</h1>
        <button onClick={this.updatedata}>update data....</button>
      </div>
    )
  }
}
