import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const ContainerButton = styled.TouchableOpacity`
  width: 327px;
  height: 58px;

  background: #ffffff;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding-left: 60px;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #252422;
  margin-top: 5px;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  left: 15px;
`;

export const IconLeft = styled(EvilIcons)`
  color: #000;
`;

export const IconRight = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(20)}px;
  position: absolute;
  right: 15px;
`;
