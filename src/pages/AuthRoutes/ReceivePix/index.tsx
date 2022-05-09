import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import {Button} from '@components/index';

import {
  BalanceTitle,
  BalanceWrapper,
  BoxFinancialReport,
  ContainerBody,
  ContainerButton,
  ContainerHeader,
  ContainerPixImage,
  HideBalance,
  Icon,
  PIXImage,
  RowTextBox,
  ScrollPanel,
  TextBox,
  Title,
  TitleBox,
  TitleHeader,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: -1;
`;

const ReceivePix: React.FC = () => {
  const [visibleBalance, setVisibleBalance] = useState(false);
  const handleShowBalance = () => setVisibleBalance(state => !state);

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <ContainerHeader>
          <TitleHeader>Receber PIX</TitleHeader>

          <BalanceWrapper>
            <View>
              <BalanceTitle>Saldo</BalanceTitle>
              {visibleBalance ? <Title>R$ 5.361,00 </Title> : <HideBalance />}
            </View>
            <Icon
              name={visibleBalance ? 'eye-off' : 'eye'}
              onPress={handleShowBalance}
            />
          </BalanceWrapper>
        </ContainerHeader>
      </ImageBackground>
      <ContainerBody>
        <ContainerPixImage>
          <PIXImage source={require('@assets/icons/qrcode-image.png')} />
          <ContainerButton>
            <Button
              style={{width: 300, height: 30, borderRadius: 10}}
              title="copiar chave PIX"
              onPress={() => {}}
            />
          </ContainerButton>
        </ContainerPixImage>
        <ScrollPanel
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
          <BoxFinancialReport>
            <TitleBox>Relatório Financeiro</TitleBox>
            <View style={{height: 30}} />
            
            <RowTextBox>
              <TextBox>Valor Pago</TextBox>
              <View style={{width: 100}} />
              <TextBox style={{fontSize: 19}}>R$ 5.361,00</TextBox>
            </RowTextBox>
            <RowTextBox>
              <TextBox>Boletos Pendentes</TextBox>
              <View style={{width: 40}} />
              <TextBox style={{fontSize: 19}}>R$ 5.361,00</TextBox>
            </RowTextBox>
            <RowTextBox>
              <TextBox>Boletos Venc. E Canc.</TextBox>
              <View style={{width: 18}} />
              <TextBox style={{fontSize: 19}}>R$ 5.361,00</TextBox>
            </RowTextBox>
            
          </BoxFinancialReport>
        </ScrollPanel>
      </ContainerBody>
    </>
  );
};

export default ReceivePix;
