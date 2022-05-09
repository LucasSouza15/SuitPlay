import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 100px;

  top: -20px;

  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  color: #ffffff;
`;

export const ContainerBody = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const Form = styled.View`
  padding: 24px;
  align-self: stretch;
`;

export const Fields = styled.View``;
