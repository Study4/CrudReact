import React, { Component } from 'react';

export default class InputForm extends Component {

    add(){
        alert("add");
    };

    update(){
        alert("update");
    };

    render() {
        return(
            <form>
                <label>LastName</label>
                <input type="text"/>
                <label>FirstName</label>
                <input type="text"/>
                <input type="button" value="新增" onClick={this.add} />
                <input type="button" value="更新" onClick={this.update} />
            </form>
        );
    }
}