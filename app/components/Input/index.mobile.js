import React from 'react';
import { Text, TextInput } from 'react-native';
import styled from 'styled-components/native'
import styles from './styles';

const StyledView = styled.View`${styles}`;

const Input = ({ value, handleChange }) => (
  <StyledView>
    <TextInput
      style={{ height: 40 }}
      placeholder="Type here to translate!"
      onChangeText={handleChange}
    />
    <Text style={{ padding: 10, fontSize: 42 }}>
      {value}
    </Text>
  </StyledView>
);

export default Input;
