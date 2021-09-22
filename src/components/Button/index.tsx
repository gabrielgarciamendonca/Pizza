import React from 'react';
import { Container, Text } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../styles/theme';

export function Button() {
  return (
      <Container>
       <Text>
         Add to Card
       </Text>
       <Feather
          name="shopping-cart"
          size={24}
          color={theme.colors.white}
       />
      </Container>
  );
}