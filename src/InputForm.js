import React, { Component } from 'react';
import update from 'react-addons-update';


export default class InputForm extends Component {
  constructor(props) {
        super(props);
        console.log(props.emp)
        this.state = {
            emp : {}
        };
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
             emp: nextProps.emp
        });
    }

    handleLastNameChange(e){
        this.setState({emp: update(this.state.emp,{lastName:{$set: e.target.value}})});
    }

    handleFirstNameChange(e){
        this.setState({emp: update(this.state.emp,{firstName:{$set: e.target.value}})});
    }

    handleAdd(){
        console.log(this.state.emp)
        this.props.onAdd(this.state.emp);
    };

    handleSave(){
        this.props.onSave(this.state.emp);
    };

    render() {
        return(
            <form>
                <label>LastName</label>
                <input type="text" placeholder="LastName"
                    value={this.state.emp.lastName || ``} 
                    onChange={this.handleLastNameChange.bind(this)} />
                <label>FirstName</label>
                <input type="text" placeholder="FirstName"
                    value={this.state.emp.firstName || ``} 
                    onChange={this.handleFirstNameChange.bind(this)} />
                <input type="button" value="新增" onClick={this.handleAdd.bind(this)} />
                <input type="button" value="儲存" onClick={this.handleSave.bind(this)} />
            </form>
        );
    }
}