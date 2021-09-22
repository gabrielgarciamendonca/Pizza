import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40;
  margin-bottom: 20;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.brown};
  font-size: 28;
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.orange};
  font-size: 20;
  align-self: flex-end;
`;

export const TextContainer = styled.View``;
