import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.TouchableOpacity`
  background-color: ${theme.colors.red};
  height: 50px;
  width: 200px;
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${theme.colors.white};
  font-size: 16px;
`;
