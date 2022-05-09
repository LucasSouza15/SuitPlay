import React, {useEffect, useState} from 'react';

import logo from '@assets/images/logo1.png';
import styled from 'styled-components/native';
import HighlightCard from './components/HighlightCard';

import {View} from 'react-native';
import {useAuth} from '@hooks/auth';
import {useDropDown} from '@hooks/dropdown';
import {useStatusBar} from '@hooks/StatusBar';
import {useNavigation} from '@react-navigation/native';
import {useUserContext} from '../../../contexts/UserContext';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import ItemCard from './components/ItemCard';
import MinorCard from './components/MinorCard';
import FooterCard from './components/FooterCard';
import {
  AtTitle,
  BalanceTitle,
  BalanceWrapper,
  CardsContainer,
  Container,
  FooterCardsContainer,
  HideBalance,
  Icon,
  InfoView,
  InfoWrapper,
  ItensContainer,
  Logo,
  LogoContainer,
  Row,
  Title,
} from './styles';
import {ShimmerEffect} from '@components/index';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight() + 29}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export function Home() {
  useStatusBar('light-content', '#0C072D');
  const navigation = useNavigation();

  const {wallet, balanceLoading} = useUserContext();

  //@ts-ignore
  const {ref} = useDropDown();

  const {user, signOut} = useAuth();
  const [show, setShow] = useState(false);
  const handleShowBalance = () => setShow(state => !state);

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <InfoView>
          <InfoWrapper>
            <Title>
              Olá, <AtTitle>@</AtTitle>
              {user && user.username}
            </Title>

            <BalanceWrapper>
              <View>
                <BalanceTitle>Saldo</BalanceTitle>
                {!balanceLoading ? (
                  show ? (
                    <Title>R$ {wallet.balance} </Title>
                  ) : (
                    <HideBalance />
                  )
                ) : show ? (
                  <ShimmerEffect />
                ) : (
                  <HideBalance />
                )}
              </View>
              <Icon
                name={show ? 'eye-off' : 'eye'}
                onPress={handleShowBalance}
              />
            </BalanceWrapper>
          </InfoWrapper>
          <LogoContainer>
            <Logo source={logo} />
          </LogoContainer>
        </InfoView>
      </ImageBackground>
      <Container>
        <CardsContainer>
          <ItensContainer>
            <HighlightCard />
            <Row>
              <ItemCard
                title="Trans. Máquinas"
                value="R$ 2.000,00"
                icon="graph"
              />
              <MinorCard title="Receber via PIX" icon="qr-code" />
            </Row>
            <Row>
              <ItemCard
                title="Trans. Online"
                value="R$ 192,00"
                icon="shopping-cart"
              />
              <MinorCard icon="link" title="Receber via Link" />
            </Row>
          </ItensContainer>
          <FooterCardsContainer>
            <FooterCard
              iconName="pix"
              text="PIX"
              //@ts-ignore
              onPress={() => navigation.navigate('TransferTEV')}
            />
            <FooterCard
              iconName="ted"
              text="TED"
              //@ts-ignore
              onPress={() => navigation.navigate('TransferTEDRoutes')}
            />

            <FooterCard
              iconName="boleto"
              text="Pagar Boleto"
              //@ts-ignore
              onPress={() => navigation.navigate('PaymentRoutes')}
            />
          </FooterCardsContainer>
        </CardsContainer>
      </Container>
    </>
  );
}

export default Home;
