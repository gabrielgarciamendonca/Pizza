import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { theme } from '../../styles/theme';
import { Container, SubTitle, TextContainer, Title } from './style';

export function Header() {
  return (
    <Container>
      <Feather name="arrow-left" color={theme.colors.brown} size={32} />
      <TextContainer>
        <Title>Oriental Food</Title>
        <SubTitle>Special Sushi</SubTitle>
      </TextContainer>
    </Container>
  );
}
