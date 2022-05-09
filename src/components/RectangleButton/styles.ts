import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import {PIcon} from '@components/index';

type IconProps = {
  alternativeLeft?: number;
};

export const ContainerButton = styled.TouchableOpacity`
  width: 327px;
  height: 58px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
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
`;

export const ContainerIcon = styled.View<IconProps>`
  position: absolute;
  left: ${props => (props.alternativeLeft ? props.alternativeLeft : 20)}px;
`;

export const IconButton = styled(PIcon)``;

export const IconRight = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(20)}px;
  position: absolute;
  right: 15px;
`;
