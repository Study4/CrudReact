import React, { Component } from 'react';
import InputeForm from './InputForm';
import Grid from './Grid';


export default class App extends Component {



  render() {
    return (
      <div className="container" style={{TopPadding:50}}>
        <h2>NorthWind - Customer</h2>

            <InputeForm />
            <Grid />
           
      </div>
    );
  }
}