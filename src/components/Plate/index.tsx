import React from 'react';

import plateImg from '../../assets/plate.png';
import { Container } from './style';

export function Plate() {
  return <Container source={plateImg} resizeMode="contain" />;
}
