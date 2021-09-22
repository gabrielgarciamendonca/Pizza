import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Toggle } from '../../components/Toogle';
import { Plate } from '../../components/Plate';
import { Container } from './style';

export function Details() {
  return (
    <Container>
      <Header />
      <Toggle />
      <Plate />
      <Footer />
    </Container>
  );
}
