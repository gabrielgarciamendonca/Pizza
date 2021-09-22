import React from 'react';
import { Button } from '../Button';
import { Container, FooterContainer, Label, Price, Text } from './style';

export function Footer() {
  return (
    <Container>
      <Label>Detail</Label>
      <Text>
        Get 50% discount on the special and delicious sushi and stay connected
        for further discounts.
      </Text>
      <FooterContainer>
        <Price>$22</Price>
        <Button />
      </FooterContainer>
    </Container>
  );
}
