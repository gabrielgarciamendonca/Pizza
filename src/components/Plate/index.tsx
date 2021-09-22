import React from 'react';

import plateImg from '../../assets/plate.png';
import { Container } from './style';

export function Plate() {
  return (
    <Container
      from={{ rotate: '100deg', opacity: 0 }}
      animate={{ rotate: '0deg', opacity: 1 }}
      transition={{ type: 'timing', duration: 2000 }}
      source={plateImg}
      resizeMode="contain"
    />
  );
}
