import styled from 'styled-components/native';

export const ContainerBody = styled.View`
  width: 327px;
  height: 567px;
  top: -80px;
  padding: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  align-items: center;
`;

export const TitleBoxProfile = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */
  text-align: center;
  color: #252422;
  margin-bottom: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 327px;
  height: 143px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  align-items: center;
  padding: 5px;
`;

export const TextButton = styled.Text``;
