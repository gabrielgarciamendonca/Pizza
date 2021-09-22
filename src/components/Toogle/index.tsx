import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Pressable } from 'react-native';

import { height, theme, width } from '../../styles/theme';
import { Container, IconContainer, Info, Label, Value } from './style';
import { useAnimationState } from '@motify/core';

export function Toggle() {
  const [toggleIsOpened, setToggleIsOpened] = useState(false);
  const animatedStyle = useAnimationState({
    open: {
      height: height * 0.3,
      width: width * 0.2,
    },
    closed: {
      height: 65,
      width: 65,
    },
  });

  useEffect(() => {
    animatedStyle.transitionTo('closed');
  }, []);

  function handleOpenToggle() {
    animatedStyle.transitionTo('open');
    setToggleIsOpened(true);
  }

  function handleCloseToggle() {
    animatedStyle.transitionTo('closed');
    setToggleIsOpened(false);
  }

  return (
    <Container
      state={animatedStyle}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Pressable
        onPressIn={() => handleOpenToggle()}
        onPressOut={() => handleCloseToggle()}
      >
        <IconContainer
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 400, loop: true }}
        >
          {toggleIsOpened ? (
            <Feather name="x" color={theme.colors.white} size={26} />
          ) : (
            <Feather name="tag" color={theme.colors.white} size={26} />
          )}
        </IconContainer>
      </Pressable>

      <Info>
        <Label>Calories</Label>
        <Value>150</Value>
      </Info>
      <Info>
        <Label>Weight</Label>
        <Value>190g</Value>
      </Info>
    </Container>
  );
}
