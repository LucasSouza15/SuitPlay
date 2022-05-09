import styled from 'styled-components/native';

export const TextMachine = styled.Text`
  text-align: center;

  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;

  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #252422;
`;

export const ImageMachine = styled.Image`
  margin-top: 30px;
`;

export const ContainerButton = styled.View`
  width: 100%;

  margin-top: 30px;
`;