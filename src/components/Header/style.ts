import { MotiView } from '@motify/components';
import styled from 'styled-components/native';
import { height, sizes, theme } from '../../styles/theme';

export const Container = styled(MotiView)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${height * 0.04}px;
  margin-bottom: ${height * 0.04}px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.brown};
  font-size: ${sizes.fonts.h3}px;
  align-self: flex-end;
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.orange};
  font-size: ${sizes.fonts.h4}px;
  align-self: flex-end;
`;

export const TextContainer = styled.View``;
