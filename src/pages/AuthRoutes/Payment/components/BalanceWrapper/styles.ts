import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const BalanceWrapperContainer = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
  left: 15px;
`;

export const BalanceTitle = styled.Text`
color: ${({theme}) => theme.colors.secondary};
font-family: ${({theme}) => theme.fonts.bold};
font-size: ${RFValue(14)}px;
`;

export const Title = styled.Text`
color: white;
font-family: ${({theme}) => theme.fonts.bold};
font-size: ${RFValue(18)}px;
`;

export const HideBalance = styled.View`
width: ${RFValue(90)}px;
height: ${RFValue(20)}px;
margin-right: 5px;
background-color: ${({theme}) => theme.colors.white[100]};
`;

export const Icon = styled(Feather)`
color: ${({theme}) => theme.colors.secondary};
font-size: ${RFValue(20)}px;
`;