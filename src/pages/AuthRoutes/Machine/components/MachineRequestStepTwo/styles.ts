import styled from 'styled-components/native';

export const TitleTextStep = styled.Text`
  text-align: center;

  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #252422;

  margin-top: 20px;

`;

export const SecondTextStep = styled.Text`
  text-align: center;

  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #252422;

  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const MachineImage = styled.Image`

`;

export const ContainerButton = styled.View`
  width: 100%;
  
  margin-top: 5px;
  margin-bottom: 20px;
`;