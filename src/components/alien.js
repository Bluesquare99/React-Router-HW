import React from 'react';
import ReactDOM from 'react-dom';

export class Alien extends React.Component{
  
  constructor() {
    super();
    this.state = {text: "An alien!"};
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ text: "Jeremy!" })  
    }
  
  render() {

      return (
        <div>
        <p>{this.state.text}</p>
        <button onClick={this.handleClick}>What's it's name?</button>
        </div>
      )
    };  
} 
