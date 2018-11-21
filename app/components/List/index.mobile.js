import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
`
const StyledText = styled.Text`
  color: grey;
`

export default class Input extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledView>
        <FlatList
          data={data}
          renderItem={({ item }) => <StyledText>{item.name}</StyledText>}
        />
      </StyledView>
    );
  }
}