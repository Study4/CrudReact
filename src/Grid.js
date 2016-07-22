import React, { Component } from 'react';

export default class Grid extends Component {

    edit(){
        alert("edit");
    };

    del(){
        alert("del");  
    };

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
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input type="button" className="btn btn-link" value="修改" onClick={this.edit} /></td>
                            <td><input type="button" className="btn btn-link" value="刪除" onClick={this.del} /></td>                  
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}