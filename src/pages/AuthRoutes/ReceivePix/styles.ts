import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 75%;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const BalanceWrapper = styled.View`
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

export const ContainerBody = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  /* z-index: +10; */
`;

export const ContainerPixImage = styled.View`
  top: -${RFValue(30)}px;
  width: 321px;
  height: 305px;

  background: #fff;
  box-shadow: 10px 5px 5px black;
  border-radius: 10px;

  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;
`;

export const PIXImage = styled.Image`
  width: 219px;
  height: 216px;
`;

export const ContainerButton = styled.View`
  margin-top: 30px;
`;

export const ScrollPanel = styled.ScrollView`
  width: 100%;
  top: -${RFValue(15)}px;
`;

export const ContainerCenterRow = styled.View`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const BoxFinancialReport = styled.View`
  width: 321px;
  height: 201px;

  background: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 7px;
  padding-left: 20px;
  padding-top: 30px;
`;

export const TitleBox = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.bold};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

export const RowTextBox = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const TextBox = styled.Text`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;
  /* identical to box height */

  color: #252422;
`;
