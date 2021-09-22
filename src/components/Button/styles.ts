import styled from 'styled-components/native';
import { height, sizes, theme, width } from '../../styles/theme';

export const Container = styled.TouchableOpacity`
  background-color: ${theme.colors.red};
  height: ${height * 0.08}px;
  width: ${width * 0.54}px;
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${theme.colors.white};
  font-size: ${sizes.fonts.h6.fontSize}px;
`;
