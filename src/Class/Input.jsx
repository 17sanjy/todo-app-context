import React, { Component } from 'react'
import store from './store';

export default class Input extends Component {
    static contextType = store;
    constructor(){
        super();
        this.state = {
            todo:''
        }
    }

    inputChange = (event) => {
        this.setState({todo:event.target.value})
    }
    
    submit = (event) => {
        event.preventDefault();
        this.context.addTodo(this.state.todo)
    }

  render() {
    return (
        <form className="row mt-4" onSubmit={this.submit}>
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo..."
              value={this.state.todo}
              onChange={this.inputChange}
            />
          </div>
    
          <div className="col-2">
            <button type="submit" className="btn btn-primary mb-3">
             Add
            </button>
          </div>
        </form>
      );
    }
}
