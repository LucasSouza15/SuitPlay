import React from 'react';
import {View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {useAuth} from '@hooks/auth';

import {
  ContainerBody,
  BoxProfileData,
  TextBoxProfile,
  TitleBoxProfile,
  ContainerUserStatus,
} from './styles';
import ButtonAlterPass from './components/Button';
import HeaderProfile from '../Home/components/HeaderProfile';
import { useNavigation } from '@react-navigation/native';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Profile: React.FC = () => {
  const {user} = useAuth();

  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <HeaderProfile approvedAccount={user && user.approvedAccount} 
        />
      </ImageBackground>
      <ContainerBody>
        <ContainerUserStatus>
          <View style={{marginBottom: 65}} />
          <BoxProfileData onPress={() =>navigation.navigate('VerificarConta')}>
             
            <View style={{marginBottom: 10}} />
            <TextBoxProfile>Usuario: {user && user.username}</TextBoxProfile>
            <TextBoxProfile>Nome: {user && user.name}</TextBoxProfile>
            <TextBoxProfile>CPF: 000.000.000-11</TextBoxProfile>
            <TextBoxProfile>E-mail: {user && user.email}</TextBoxProfile>
            <TextBoxProfile>Celular: (00) 0.0000-0081</TextBoxProfile>
          </BoxProfileData>

          <BoxProfileData>
            <TitleBoxProfile>Endereço</TitleBoxProfile>
            <View style={{marginBottom: 10}} />
            <TextBoxProfile>CEP: 74230-050</TextBoxProfile>
            <TextBoxProfile>Rua/AV.: AVENIDA T 13</TextBoxProfile>
            <TextBoxProfile>Bairro: SETOR BUENO</TextBoxProfile>
            <TextBoxProfile>Setor: Goiânia - GO</TextBoxProfile>
          </BoxProfileData>
        </ContainerUserStatus>
        <ButtonAlterPass  functionOnPress={() =>navigation.navigate('EditPassword')} />
      </ContainerBody>
    </>
  );
};

export default Profile;
