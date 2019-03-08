import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = e => {
    e.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(e, this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'age') {
        value = parseInt(value, 10);
    }
    this.setState(prevState => ({
          ...prevState,
          [e.target.name]: value
    }));
  }
  
  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === 'age') {
        value = parseInt(value, 10);
    }

    this.setState(prevState => ({
        friend: {
            ...prevState.friend,
            [ev.target.name]: value
        }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
