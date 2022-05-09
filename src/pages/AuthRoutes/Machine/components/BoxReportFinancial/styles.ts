import styled from 'styled-components/native';

export const Container = styled.View`
  width: 321px;
  height: 180px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 10px 10px 10px 20px;

  top: -15px;
`;

export const TitleBox = styled.Text`
  width: 187px;
  height: 23px;

  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  color: #00d19a;
`;

export const ContainerRow = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: row;
`;

export const BoxLeft = styled.View`
  width: 60%;
  height: 100%;

  padding-top: 10px;
`;

export const BoxRight = styled.View`
  width: 40%;
  height: 100%;

  padding-top: 10px;
`;

export const TextBox = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  /* line-height: 15px; */

  color: #252422;

  margin-top: 10px;
  margin-bottom: 10px;
`;
