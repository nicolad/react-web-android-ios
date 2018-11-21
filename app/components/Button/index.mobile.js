import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class ButtonItem extends Component {
  render() {
    const { onAction, title = 'Button' } = this.props;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
      }}>
        <Button
          onPress={onAction}
          title={title}
          color="#841584"
          accessibilityLabel={title}
        />
      </View>
    );
  }
}