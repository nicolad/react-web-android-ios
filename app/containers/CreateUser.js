import React, { Component, Fragment } from 'react';
import { pathOr } from 'ramda';
import API from '../services/api'
import Input from '../components/Input';
import Button from '../components/Button';

export default class CreateUser extends Component {
  state = {
    name: '',
  }

  handleChange = event => {
    const name = pathOr(event, ['event', 'target', 'value'])(event);
    this.setState({ name });
  }

  handleSubmit = () => {
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
