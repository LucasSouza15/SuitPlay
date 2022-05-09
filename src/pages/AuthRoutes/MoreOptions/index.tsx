import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import ButtonList from './components/ButtonList';
import {ContainerHeader, ContainerListButtons, TitleHeader} from './styles';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 20px;
  padding-right: 20px;
`;

const MoreOptions: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <ContainerHeader>
          <TitleHeader>Mais</TitleHeader>
          <ButtonList
            buttonText="Transferência via PIX"
            icon="pix"
            onFunction={() => {}}
          />
          <ButtonList
            buttonText="Receber via PIX"
            icon="qr-code"
            onFunction={() => navigation.navigate('ReceivePix')}
          />
        </ContainerHeader>
      </ImageBackground>
      <ContainerListButtons>
        <View style={{marginBottom: 45}} />
        <ButtonList
          buttonText="TED"
          icon="ted"
          onFunction={() => navigation.navigate('TransferTEDRoutes')}
        />
        <ButtonList
          buttonText="Boleto"
          icon="boleto"
          onFunction={() => navigation.navigate('Billet')}
        />
        <ButtonList
          buttonText="Transferência via PIX"
          icon="pix"
          onFunction={() => {}}
        />
        <ButtonList
          buttonText="Pagamento Boleto"
          icon="boleto"
          onFunction={() => {}}
        />
        <ButtonList
          buttonText="Perfil"
          icon="user"
          onFunction={() => navigation.navigate('MoreOptionsRoutes')}
        />
      </ContainerListButtons>
    </>
  );
};

export default MoreOptions;
