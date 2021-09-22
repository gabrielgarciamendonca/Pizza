import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View``;

export const FooterContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.Text`
    font-family: ${theme.fonts.primary400};
    color: ${theme.colors.gray};
    font-size: 14;
    line-height: 18;
    margin-top: 15;
    margin-bottom: 15;
`;

export const Label = styled.Text`
    font-family: ${theme.fonts.primary700};
    color: ${theme.colors.brown};
    font-size: 17;
`;

export const Price = styled.Text`
    font-family: ${theme.fonts.primary700};
    color: ${theme.colors.brown};
    font-size: 34;
`;