import styled from 'styled-components/native';

export const TextPageStep = styled.Text`
  text-align: center;

  margin-left: 40px;
  margin-right: 40px;
  margin-top: 20px;

  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #252422;
`;

export const ContainerButton = styled.View`
  width: 100%;

  margin-top: 20px;
  margin-bottom: 20px;
`
