import React, {useState} from 'react';

import styled from 'styled-components/native';
import {MainDataStep} from './components/MainDataStep';
import {BalanceWrapper, KeyboardShift} from '@components/index';
import {SelectOptionsStep} from './components/SelectOptionsStep';
import {ValueTransferStep} from './components/ValueTransferStep';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

import {
  useTransferContext,
  TransferStep,
} from '../../../contexts/TransferContext';

import {ContainerHeader, TitleHeader, ContainerBody, Container} from './styles';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight() + 29}px;
  padding-left: 20px;
  padding-right: 20px;
`;

const TransferTED: React.FC = () => {
  const [visibleBalance, setVisibleBalance] = useState(false);
  const onVisibleBalance = () => setVisibleBalance(!visibleBalance);

  const {transferStep} = useTransferContext();

  function showPageStep() {
    switch (transferStep) {
      case TransferStep.MainData:
        return <MainDataStep />;
      case TransferStep.TransferValue:
        return <ValueTransferStep />;
      default:
        return <SelectOptionsStep />;
    }
  }

  return (
    <>
      <KeyboardShift>
        {/* <Container> */}
        <ImageBackground
          resizeMode="cover"
          source={require('@assets/images/fundo.png')}>
          <ContainerHeader>
            <TitleHeader>TED</TitleHeader>
            <BalanceWrapper
              handleShowBalance={onVisibleBalance}
              visibleBalance={visibleBalance}
            />
          </ContainerHeader>
        </ImageBackground>
        <ContainerBody>{showPageStep()}</ContainerBody>
        {/* </Container> */}
      </KeyboardShift>
    </>
  );
};

export default TransferTED;
