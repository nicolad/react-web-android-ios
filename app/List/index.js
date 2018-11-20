import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        { this.props.data.map(person => <li>{person.name}</li>)}
      </ul>
    );
  }
}

export default List;
