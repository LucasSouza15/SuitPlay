import React, {useState} from 'react';
import styled from 'styled-components/native';
import {LoadingView} from '@components/index';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {MachineRequestStepOne} from './components/MachineRequestStepOne';
import {MachineRequestStepTwo} from './components/MachineRequestStepTwo';

import {
  BorderBox,
  ContainerBody,
  ContainerDetails,
  ContainerDetailsBox,
  ContainerHeader,
  ImageMachineTopBox,
  PanelBox,
  PanelTopBox,
  TextBox,
  TitleHeader,
  UserName,
} from './styles';

import {
  MachineRequestStep,
  useMachineRequest,
} from '../../../contexts/MachineRequestContext';
import {MachineRequestStepThree} from './components/MachineRequestStepThree';
import {MachineRequestStepFour} from './components/MachineRequestStepFour';
import {MachineRequestStepFinal} from './components/MachineRequestStepFinal';
import {BoxMoneyDetails} from './components/BoxMoneyDetails';
import {BoxReportFinancial} from './components/BoxReportFinancial';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight() + 29}px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Machine: React.FC = () => {
  const {currentStep, isLoading} = useMachineRequest();

  const [AlreadyHaveMachine] = useState<boolean>(true);

  function handleLoadStepPage() {
    if (isLoading) {
      return <LoadingView />;
    }

    switch (currentStep) {
      case MachineRequestStep.Primary:
        return <MachineRequestStepOne />;
      case MachineRequestStep.Secondary:
        return <MachineRequestStepTwo />;
      case MachineRequestStep.Tertiary:
        return <MachineRequestStepThree />;
      case MachineRequestStep.Quaternary:
        return <MachineRequestStepFour />;
      case MachineRequestStep.Final:
        return <MachineRequestStepFinal />;
      default:
        return <LoadingView />;
    }
  }

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <ContainerHeader>
          <TitleHeader>Máquina</TitleHeader>
        </ContainerHeader>
      </ImageBackground>
      <ContainerBody>
        {AlreadyHaveMachine ? (
          <>
            <PanelTopBox>
              <ContainerDetails>
                <UserName>Olá: @demo</UserName>
                <ContainerDetailsBox>
                  <TextBox>Máquina Contratada</TextBox>
                  <BorderBox>
                    <TextBox
                      style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
                      S920
                    </TextBox>
                  </BorderBox>
                </ContainerDetailsBox>

                <ContainerDetailsBox>
                  <TextBox>Qtd. Máquinas</TextBox>
                  <BorderBox>
                    <TextBox
                      style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
                      5
                    </TextBox>
                  </BorderBox>
                </ContainerDetailsBox>
              </ContainerDetails>
              <ImageMachineTopBox
                source={require('../../../assets/machine-two.png')}
              />
            </PanelTopBox>
            <BoxMoneyDetails />
            <BoxReportFinancial />
          </>
        ) : (
          <PanelBox>{handleLoadStepPage()}</PanelBox>
        )}
      </ContainerBody>
    </>
  );
};

export default Machine;
