import React from 'react';
import {View} from 'react-native';

import {
  ContainerHeader,
  ContainerUserStatus,
  ImageUser,
  TitleHeader,
  BoxProfileData,
  UserName,
  AccountName,
  AccountState,
} from './styles';

type HeaderProfileProps = {
  approvedAccount: boolean;
};

const HeaderProfile: React.FC<HeaderProfileProps> = ({approvedAccount}) => {
  return (
    <ContainerHeader>
      <TitleHeader>Perfil</TitleHeader>

      <ContainerUserStatus>
        <ImageUser source={require('@assets/ProfilePic.png')} />
        <View style={{marginBottom: 25}} />
        <BoxProfileData>
          <View style={{marginBottom: 55}} />
          <UserName>Davyd Kewen</UserName>
          <AccountName>@davydk</AccountName>
          <View style={{marginBottom: 10}} />
          <AccountState>
            Status: {approvedAccount ? 'Conta Ativada' : 'Conta Pendente'}
          </AccountState>
        </BoxProfileData>
      </ContainerUserStatus>
    </ContainerHeader>
  );
};

export default HeaderProfile;
