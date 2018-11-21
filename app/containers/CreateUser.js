import React, { Component, Fragment } from 'react';
import API from '../services/api'
import Input from '../components/Input';
import Button from '../components/Button';

export default class CreateUser extends Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    API.post('users', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    const { name } = this.state;
    return (
      <Fragment>
        <Input value={name} handleChange={this.handleChange} />
        <Button onAction={this.handleSubmit} title="Create user" />
      </Fragment>
    )
  }
}
