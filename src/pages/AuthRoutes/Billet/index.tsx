import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {useNavigation} from '@react-navigation/native';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {
  ContainerBody,
  ContainerHeader,
  ContainerImageLeft,
  LeftImage,
  TitleHeader,
} from './styles';

import {BalanceWrapper} from './components/BalanceWrapper';
import {SelectStep} from './components/SelectStep';
import {DepositStep} from './components/DepositStep';
import {BilletStep, useBillet} from '../../../contexts/BilletContext';
import {ViewBillet} from './components/ViewBillet';
import { NewBilletStep } from './components/NewBilletStep';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Billet: React.FC = () => {
  const {billetStep} = useBillet();

  const navigation = useNavigation();

  const [visibleBalance, setVisibleBalance] = useState(false);
  const handleShowBalance = () => setVisibleBalance(state => !state);

  function showPageStep() {
    switch (billetStep) {
      case BilletStep.NewDeposit:
        return <DepositStep />;
      case BilletStep.NewBillet:
        return <NewBilletStep />;
      case BilletStep.Report:
        return <ViewBillet />;
      default:
        return <SelectStep />;
    }
  }

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <ContainerHeader>
          <ContainerImageLeft onPress={() => navigation.goBack()}>
            <LeftImage source={require('@assets/icons/left.png')} />
          </ContainerImageLeft>
          <TitleHeader>Boleto</TitleHeader>

          <BalanceWrapper
            visibleBalance={visibleBalance}
            setVisibleBalance={handleShowBalance}
          />
        </ContainerHeader>
      </ImageBackground>
      <ContainerBody>{showPageStep()}</ContainerBody>
    </>
  );
};

export default Billet;