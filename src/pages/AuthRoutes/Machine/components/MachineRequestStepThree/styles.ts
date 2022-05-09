import styled from 'styled-components/native';

export const TitlePageStep = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #252422;

  margin-top: 10px;
`;

export const TableImage = styled.Image`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const TextPage = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #252422;

  margin-left: 40px;
  margin-right: 40px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
`;