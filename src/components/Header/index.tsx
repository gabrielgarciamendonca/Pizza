import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { theme } from '../../styles/theme';
import { SubTitle, TextContainer, Title } from './style';
import { MotiView } from 'moti';

export function Header() {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing', duration: 900 }}
    >
      <Feather name="arrow-left" color={theme.colors.brown} size={32} />
      <TextContainer>
        <Title>Oriental Food</Title>
        <SubTitle>Special Sushi</SubTitle>
      </TextContainer>
    </MotiView>
  );
}
