import React from 'react';

const List = ({ data }) => (
  <ul>
    {data.map(person => <li>{person.name}</li>)}
  </ul>
);

export default List;
