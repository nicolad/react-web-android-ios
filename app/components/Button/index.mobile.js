import React, { Component } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import styles from './styles';

const StyledView = styled.View`${styles}`;

export default class ButtonItem extends Component {
  render() {
    const { onAction, title = 'Button' } = this.props;
    return (
      <StyledView>
        <Button
          onPress={onAction}
          title={title}
          accessibilityLabel={title}
        />
      </StyledView>
    );
  }
}