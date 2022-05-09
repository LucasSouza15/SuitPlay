import React from 'react';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import HeaderProfile from '../Home/components/HeaderProfile';
import {useAuth} from '@hooks/auth';
import {ContainerBody, ContainerButton} from './styles';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {Button, NamedInput} from '@components/index';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 20px;
  padding-right: 20px;
`;

const EditPassword: React.FC = () => {
  const {user} = useAuth();
  const {control, handleSubmit} = useForm();

  function handleOnSubmit(data: any) {
    console.log(data);
  }

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <HeaderProfile approvedAccount={user && user.approvedAccount} />
      </ImageBackground>
      <ContainerBody>
        <View style={{marginBottom: 100}} />
        <NamedInput control={control} hint="Senha Atual" name="oldPassword" />
        <NamedInput control={control} hint="Nova Senha" name="NewPassword" />
        <NamedInput
          control={control}
          hint="Confirme a Senha"
          name="ConfirmPassword"
        />
        <ContainerButton>
          <Button
            style={{width: 300, height: 30, borderRadius: 10}}
            title="Salvar senha"
            onPress={handleSubmit(handleOnSubmit)}
          />
        </ContainerButton>
      </ContainerBody>
    </>
  );
};

export default EditPassword;
