import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text } from 'react-native';

import { theme } from '../../styles/theme';
import { Container, Info, Label, Value } from './style';

export function Toggle() {
  return (
    <Container>
      <Feather name="x" color={theme.colors.white} size={26} />
      <Info>
        <Label>Calories</Label>
        <Label>150</Label>
      </Info>
      <Info>
        <Label>Weight</Label>
        <Value>190g</Value>
      </Info>
    </Container>
  );
}
