import React, { Component } from 'react';
import API from '../services/api'
import List from '../components/List';

export default class ListUsers extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    API.get('users')
      .then(({ data: persons }) => this.setState({ persons }));
  }

  render() {
    const { persons } = this.state;
    return <List data={persons} />;
  }
}
