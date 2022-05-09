import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ContainerUserStatus = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const BoxProfileData = styled.TouchableOpacity`
  width: 327px;
  height: 143px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
  padding: 5px;
`;

export const ContainerBody = styled.View`
  width: 100%;
  align-items: center;
`;

export const TitleBoxProfile = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;
  color: #252422;
`;

export const TextBoxProfile = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #252422;
`;
