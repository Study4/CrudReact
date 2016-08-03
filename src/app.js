import React, { Component } from 'react';
import InputeForm from './InputForm';
import Grid from './Grid';
import fetch from 'isomorphic-fetch';
import update from 'react-addons-update';

export default class App extends Component {
  constructor(props) {
        super(props);

        this.state = {
          data: [{}],
          emp : {}
        };

        fetch('http://study4sampleapi.azurewebsites.net/api/employees/')
          .then( response => {
              if (response.status >= 400) {
                  throw new Error("Bad response from server");
              }
              return response.json();          
          })
          .then( stories => {
              this.setState({
                data:stories
              });
          });
    }

  save(emp){
    fetch(`http://study4sampleapi.azurewebsites.net/api/employees/${emp.employeeID}` , { 
      method: 'Put',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emp)
    })
    .then( response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        let index = -1;
        for(let i=0 ; i<this.state.data.length; i++)
        {
          if(this.state.data[i].employeeID == emp.employeeID)
          {
            index = i;
          }
        }
        this.setState({
            data: update(this.state.data,{$splice: [[index,1,emp]] } ),
            emp: emp
        })      
      });
      // .then( () => {
        
      //   //let item = this.state.items.filter((i) => { return i.employeeID === emp.employeeID }); 
      //   // this.setState({
      //   //     data: update(this.state.data,{item} {$push: [stories]})
      //   // })
      //   alert('Save Success');
      // });

  }

  add(emp){
     fetch(`http://study4sampleapi.azurewebsites.net/api/employees/` , { 
      method: 'Post',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emp)
    })
    .then( response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();          
      })
      .then( stories => {
        this.setState({
            data: update(this.state.data, {$push: [stories]})
        })
        alert('Add Success');
      });
  }

  edit(index){
    this.setState({emp: this.state.data[index]})
  }

  del(index){
    fetch(`http://study4sampleapi.azurewebsites.net/api/employees/${this.state.data[index].employeeID}` , { 
      method: 'Delete'
    })
    .then( response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();          
      })
      .then( stories => {
        this.setState({
            data: update(this.state.data, {$splice: [[index, 1]]})
        })
        alert('Delete Success');
      });
  }
  
  render() {
    return (
      <div className="container" style={{TopPadding:50}}>
        <h2>NorthWind - Customer</h2>
            
            <InputeForm emp={this.state.emp} onAdd={this.add.bind(this)} onSave={this.save.bind(this)}/>
            <Grid data={this.state.data} onEdit={this.edit.bind(this)} onDel={this.del.bind(this)}/>
           
      </div>
    );
  }
}