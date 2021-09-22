import styled from 'styled-components/native';
import { height, sizes, theme } from '../../styles/theme';

export const Container = styled.View``;

export const FooterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.regular.fontFamily};
  color: ${theme.colors.gray};
  font-size: ${sizes.fonts.h6.fontSize}px;
  line-height: ${sizes.fonts.h6.lineHeight}px;
  margin-top: ${height * 0.02}px;
  margin-bottom: ${height * 0.05}px;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.brown};
  font-size: ${sizes.fonts.h5.fontSize}px;
`;

export const Price = styled.Text`
  font-family: ${theme.fonts.medium.fontFamily};
  color: ${theme.colors.brown};
  font-size: ${sizes.fonts.h2}px;
`;
