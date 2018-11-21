import React, { Component, Fragment } from 'react';
import API from '../services/api'
import List from '../components/List';

export default class CreateUser extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    API.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    const { persons } = this.state;
    return <List data={persons} />;
  }
}
