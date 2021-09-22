import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  position: absolute;
  z-index: 1;
  top: 150px;
  left: 24px;

  width: 70px;
  height: 170px;
  overflow: hidden;

  background-color: ${theme.colors.red};
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Info = styled.View`
  margin-top: 17px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.primary400};
  color: ${theme.colors.white};
  font-size: 14px;
`;

export const Value = styled.Text`
  font-family: ${theme.fonts.primary700};
  color: ${theme.colors.white};
  font-size: 15px;
`;
