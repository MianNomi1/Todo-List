import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      text: ""
    }

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: this.state.item.length
    }
    this.setState({
      item: this.state.item.concat(newItem),
      text: ''
    })
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
    console.log(e.target);
  }
  handleDelete = (index) => {
    //const delTodo = this.state.item.filter((i) => i.id !== index);
    this.setState({
      item: this.state.item.filter((i) => i !== index),
      text: ''
    });
  }
  render() {
    return (
      <div className="main-div">
        <h2>Todo App</h2>
        <form className="form-component" onSubmit={this.handleSubmit}>
          <lable htmlFor="new-todo">
            what needs to be done !
          </lable>
          <br></br>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.item.length + 1}
          </button>
        </form>
        <TodoList item={this.state.item} onClick={this.handleDelete} />
      </div >
    );
  }
}

export default App;
