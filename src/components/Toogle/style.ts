import { MotiView } from '@motify/components';
import styled from 'styled-components/native';
import { height, sizes, theme } from '../../styles/theme';

export const Container = styled(MotiView)`
  position: absolute;
  z-index: 1;
  top: ${height * 0.18}px;

  width: 65px;
  /* height: ${height * 0.3}px; */
  height: 65px;
  overflow: hidden;

  background-color: ${theme.colors.red};
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  padding-top: ${height * 0.03}px;
`;

export const IconContainer = styled(MotiView)``;

export const Info = styled.View`
  margin-top: ${height * 0.03}px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.white};
  font-size: ${sizes.fonts.h7.fontSize}px;
`;

export const Value = styled.Text`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.white};
  font-size: ${sizes.fonts.h6.fontSize}px;
`;
