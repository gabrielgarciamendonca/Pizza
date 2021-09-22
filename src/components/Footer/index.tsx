import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Button } from '../Button';
import { FooterContainer, Label, Price, Text } from './style';

export function Footer() {
  const offSet = useSharedValue(0);

  const Animate = useAnimatedStyle(() => {
    return {
      opacity: offSet.value,
    };
  });

  useEffect(() => {
    offSet.value = withTiming(1, { duration: 900 });
  }, []);

  return (
    <Animated.View style={[Animate]}>
      <Label>Detail</Label>
      <Text>
        Get 50% discount on the special and delicious sushi and stay connected
        for further discounts.
      </Text>
      <FooterContainer>
        <Price>$22</Price>
        <Button />
      </FooterContainer>
    </Animated.View>
  );
}
