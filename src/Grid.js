import React, { Component } from 'react';

export default class Grid extends Component {

    handleEdit(index){
        this.props.onEdit(index)
    };

    handleDel(index) {
        this.props.onDel(index)
    }


    render() {
        return(
             <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>LastName</td>
                            <td>FirstName</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((emp, index) =>{
                            return (
                            <tr key={index}>
                                <td>{emp.lastName}</td>
                                <td>{emp.firstName}</td>
                                <td><input type="button" className="btn btn-link" value="修改" onClick={this.handleEdit.bind(this,index)} /></td>                
                                <td><input type="button" className="btn btn-link" value="刪除" onClick={this.handleDel.bind(this,index)}/></td>                                              
                            </tr> )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}