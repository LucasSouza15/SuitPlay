import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type HeaderProps = {
  accountState: boolean;
};

export const ContainerHeader = styled.View`
  width: 100%;
  height: 250px;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-size: 24px;
  line-height: 30.24px;
  font-weight: 300 bold;
  color: rgba(255, 255, 255, 1);
  font-family: ${({theme}) => theme.fonts.semiBold};
  /* margin-bottom: 10px; */
`;

export const ContainerUserStatus = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageUser = styled.Image`
  position: absolute;
  z-index: +1;
  width: 100px;
  height: 100px;
`;

export const BoxProfileData = styled.View`
  width: 327px;
  height: 143px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
  padding: 5px;
`;

export const UserName = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

export const AccountName = styled.Text`
  color: ${({theme}) => theme.colors.secondary}
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const AccountState = styled.Text<HeaderProps>`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  color: ${(props) => !props.accountState ? 'red' : '#078e24'};} ;
`;
