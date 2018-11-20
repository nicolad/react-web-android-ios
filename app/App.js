import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

export default class App extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return <List data={this.state.persons} />
  }
}
