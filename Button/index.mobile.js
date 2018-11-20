import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Input extends Component {
  render() {
    const { doGet } = this.props;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
      }}>
        <Button
          onPress={doGet}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}