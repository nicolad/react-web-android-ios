import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import styles from './styles';

const StyledView = styled.View`${styles}`;

const ButtonItem = ({ onAction, title = 'Button' }) => (
  <StyledView>
    <Button
      onPress={onAction}
      title={title}
      accessibilityLabel={title}
    />
  </StyledView>
);

export default ButtonItem;