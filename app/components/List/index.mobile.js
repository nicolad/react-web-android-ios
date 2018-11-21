import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class Input extends Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}