import React, { Component } from 'react';

export default class App extends Component {

 test(){
   alert("ok!!!");
 }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <input type="button" value="aaaa" onClick={this.test} / >
      </div>
    );
  }
}