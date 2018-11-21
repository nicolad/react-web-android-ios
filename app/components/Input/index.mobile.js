import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onChange = text => {
console.log('test', text)
this.setState({text})
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
      }}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={this.onChange}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}