import React from 'react';
import styled from 'styled-components';
import styles from './styles';

const Button = styled.button`${styles}`;

const ButtonItem = ({ title, onAction }) => (
  <Button onClick={onAction}>
    {title}
  </Button>
)

export default ButtonItem;
