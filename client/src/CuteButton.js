import React from "react";
import './App.css'
import App from "./App";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
class CuteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: null
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    async handleClick() {
        this.setState({price:`${getRandomInt(100000)} USD` })


    }
    render() {
        if (this.state.price === null) {
            return (
                <button className="cutebutton" onClick={this.handleClick}>{this.props.children}</button>
            )
        } else {
            return (
                <button className="cutebutton" onClick={this.handleClick}>{this.state.price}</button>
            )
        }
      
    }

}

export default CuteButton